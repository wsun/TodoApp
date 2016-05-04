import React, {
  View,
  ListView,
  Component,
  PropTypes,
} from 'react-native';
import Todo from './Todo';
import { styles } from '../styles';

/*
 * TodoList
 * props: todos, onTodoPress()
 */

class TodoList extends Component {
  componentWillMount() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    // bind just once
    this.renderRow = this.renderRow.bind(this);

    // dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza' }])

    // load offline items
    // listen for Firebase
  }

  renderRow(rowData) {
    return (
      <Todo
        text={rowData.text}
        completed={rowData.completed}
        onPress={() => this.props.onTodoPress(rowData.id)}
      />
    );
  }

  render() {
    return (
      <View style={styles.todolist}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource.cloneWithRows(this.props.todos)}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onTodoPress: PropTypes.func.isRequired,
};

export default TodoList;
