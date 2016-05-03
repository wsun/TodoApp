import React, {
  View,
  Text,
  PropTypes,
} from 'react-native';
import { styles } from '../styles';

function StatusBar({ title }) {
  return (
    <View>
      <View style={styles.statusbar} />
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>{title}</Text>
      </View>
    </View>
  );
}
StatusBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default StatusBar;
