/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component
} from 'react-native';

import { Provider } from 'react-redux';
import App from './src/components/App';
import store from './src/store/configureStore';

class TodoApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('TodoApp', () => TodoApp);
