import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';

const { width, height} = Dimensions.get('window');

const datasource = [ {value: "cancel"}, {value: "del"}, {value: "divide"},{value: "double"}, {value: "7"},
               {value: "8"}, {value: "9"}, {value: "minus"}, {value: "4"}, {value: "5"}, {value: "6"},{value: "plus"},
               {value: "1"}, {value: "2"}, {value: "3"}, {value: "result"},{value: "00"}, {value: "0"}, {value: "."} ];

class Numpad extends Component {

  render() {
    return(
      <View style={styles.botton}>
        {datasource.map(btn => (
          <View style={{width: width/4 ,height: 90,borderTopWidth: 0.5,borderRightWidth:0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize:20}}>{btn.value}</Text>
          </View>
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
  },
  label: {
    width: width / 4,
    height: 90,
    borderTopWidth: 0.5,
    borderRightWidth:0.5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default Numpad;