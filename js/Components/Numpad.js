import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import PadButton from './PadButton';

const { width, height} = Dimensions.get('window');

const datasource = [ {value: "AC"}, {value: "delete"}, {value: "divided"},{value: "multiply"}, {value: "7"},
               {value: "8"}, {value: "9"}, {value: "minus"}, {value: "4"}, {value: "5"}, {value: "6"},{value: "plus"},
               {value: "1"}, {value: "2"}, {value: "3"}, {value: "equal"}, {value: "empty"}, {value: "00"}, {value: "0"}, {value: "."} ];

class Numpad extends Component {

  render() {
    return(
      <View style={styles.botton}>
        {datasource.map(btn => (
          <PadButton data={btn} />
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  botton: {
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap',
    position: 'absolute',
    bottom: 0,
  }
});
export default Numpad;