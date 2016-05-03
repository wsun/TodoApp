import React, {
  View,
} from 'react-native';
import FilterButton from '../containers/FilterButton';
import { styles } from '../styles';

/*
 * Footer
 */

function Footer() {
  return (
    <View style={styles.footer}>
      <FilterButton
        filter="SHOW_ALL"
        title="All"
      />
      <FilterButton
        filter="SHOW_ACTIVE"
        title="Active"
      />
      <FilterButton
        filter="SHOW_COMPLETED"
        title="Completed"
      />
    </View>
  );
}

export default Footer;
