import React from 'react';
import { View, Dimensions, Text, StyleSheet, TouchableHighlight } from 'react-native';

const { width, height} = Dimensions.get('window');

const PadButton = ({data}) => {
  if (data.value === 'del') {
    return (
      <TouchableHighlight style={styles.button}>
        <Text style={styles.regularLable}> DEL </Text>
      </TouchableHighlight>
    )
  } else {
    return (
      <TouchableHighlight style={styles.button}>
        <Text style={styles.regularLable}>{data.value}</Text>
      </TouchableHighlight>
    )
  }
};

const styles = StyleSheet.create({
  button: {
    width: width / 4,
    height: 90,
    borderTopWidth: 0.5,
    borderRightWidth:0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  regularLable: {
    fontSize: 20,
  }
});


export default PadButton;