import Firebase from 'firebase';
import { FIREBASE_ROOT } from '../config';

/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const DISPLAY_MESSAGE = 'DISPLAY_MESSAGE';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

/*
 * action creators
 */

const fireRef = new Firebase(FIREBASE_ROOT);

function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos,
  };
}

// thunk to listen for Firebase changes
export function getAllTodos() {
  return dispatch => {
    fireRef.child('todos').on('value', snapshot =>
      dispatch(receiveTodos(snapshot))
    );
  };
}

export function addTodo(text) {
  fireRef.child('todos').push({ text, completed: false }, (err) => {
    if (err) {
      console.log('Error: ${err}');
    }
  });
}
export function toggleTodo(id) {
  return (dispatch, getState) => {
    const state = getState();
    const completed = !(state.todos.filter(t => t.id === id)[0].completed);
    fireRef.child('todos').child(id).update({ completed }, (err) => {
      if (err) {
        console.log('Error: ${err}');
      }
    });
  };
}
export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
