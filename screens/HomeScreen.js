import * as React from 'react';
import { Text, View } from 'react-native';
import styles from '../constants/Styles';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{...styles.alignment, flexWrap: 'nowrap'}}>
        <Text>Вы ведь придумаете чем её заполнить :)</Text>
      </View>
    );
  }
}
