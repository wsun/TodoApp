import React, {
  View,
  Text,
  PropTypes,
} from 'react-native';
import { styles } from '../styles';

function StatusBar({ title }) {
  return (
    <View>
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>{title}</Text>
      </View>
    </View>
  );
}
StatusBar.propTypes = {
  title: PropTypes.func.string,
};


export default StatusBar;
