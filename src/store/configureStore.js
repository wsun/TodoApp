import { createStore } from 'redux';
import todoApp from '../reducers';
import devTools from 'remote-redux-devtools';

const initial = {
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      id: 1,
      text: 'Pizza',
      completed: true,
    },
    {
      id: 2,
      text: 'Fruit',
      completed: false,
    },
  ],
};

// devTools() for remote
const store = devTools()(createStore)(todoApp);
export default store;
