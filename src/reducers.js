import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  RECEIVE_TODOS,
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
    case TOGGLE_TODO:
      return state.map(t => todo(t, action));

    // convert to array for easy filtering
    case RECEIVE_TODOS: {
      const ts = [];
      action.todos.forEach((t) => {
        ts.push({
          id: t.key(),
          text: t.val().text,
          completed: t.val().completed,
        });
      });
      return ts;
    }
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
