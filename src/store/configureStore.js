import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import { getAllTodos, getAllTodosOnce } from '../actions';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    devTools()
  )
);

// set up initial state
store.dispatch(getAllTodosOnce());

export default store;
