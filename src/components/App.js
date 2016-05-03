import React, { View } from 'react-native';
import StatusBar from './StatusBar';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import { styles } from '../styles';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar title="Todos" />
      <AddTodo />
      <VisibleTodoList style={styles.listview} />
      <Footer />
    </View>
  );
}

export default App;
