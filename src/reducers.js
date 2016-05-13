import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  RECEIVE_TODO,
  RECEIVE_CHANGED_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from './actions';
const { SHOW_ALL } = VisibilityFilters;

/*
 * todo reducer helper
 */
function todo(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed,
      });

    case RECEIVE_TODO:
      return {
        id: action.todo.id,
        text: action.todo.text,
        completed: action.todo.completed,
      };

    case RECEIVE_CHANGED_TODO:
      if (state.id !== action.todo.id) {
        return state;
      }
      return Object.assign({}, state, {
        text: action.todo.text,
        completed: action.todo.completed,
      });

    default:
      return state;
  }
}


/*
 * reducers
 */
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action),
      ];

    case RECEIVE_TODO:
      if (state.filter(t => t.id === action.todo.id).length > 0) {
        return state;
      }
      return [
        ...state,
        todo(undefined, action),
      ];

    case TOGGLE_TODO:
    case RECEIVE_CHANGED_TODO:
      return state.map(t => todo(t, action));

    default:
      return state;
  }
}

/*
 * combined reducer
 */
const reducer = combineReducers({
  visibilityFilter,
  todos,
});

export default reducer;
