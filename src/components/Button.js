import React, {
  Text,
  TouchableHighlight,
  PropTypes,
} from 'react-native';
import { styles, constants } from '../styles';

/*
 * Button
 * props: active, title, onPress
 */

function Button({ active, title, onPress }) {
  if (active) {
    return (
      <TouchableHighlight
        style={[styles.action, { backgroundColor: constants.mainColor }]}
        underlayColor={constants.mainColor}
        onPress={onPress}
      >
        <Text style={[styles.actionText, { color: 'white' }]}>{title}</Text>
      </TouchableHighlight>
    );
  }
  return (
    <TouchableHighlight
      style={styles.action}
      underlayColor={constants.mainColor}
      onPress={onPress}
    >
      <Text style={styles.actionText}>{title}</Text>
    </TouchableHighlight>
  );
}
Button.propTypes = {
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
