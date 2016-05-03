import React, {
  View,
  Component,
  TextInput,
  PropTypes,
} from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { styles } from '../styles';

/*
 * AddTodo
 * props: onSubmit(), text
 */

class AddTodo extends Component {
  constructor(props) {
    super(props);

    // local state to manage text in item box
    this.state = {
      text: '',
    };
  }

  /* helper: add new Todo */
  add() {
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a todo.."
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          onSubmitEditing={() => this.add()}
        />
      </View>
    );
  }
}
AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return { onSubmit: text => dispatch(addTodo(text)) };
}

AddTodo = connect(null, mapDispatchToProps)(AddTodo);

export default AddTodo;
