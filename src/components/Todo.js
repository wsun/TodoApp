import React, {
  View,
  Text,
  TouchableOpacity,
  PropTypes,
} from 'react-native';
import { styles } from '../styles';

/*
 * Todo
 * props: text, completed, onPress()
 */

function Todo({ text, completed, onPress }) {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.text, completed && styles.completed]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Todo;
