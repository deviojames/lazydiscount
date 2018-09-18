import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { ActiveButton, EqualButton, RegularButton } from './ActiveButton';

const width = Dimensions.get('window').width;

const PadButton = ({data}) => {
  if (data.value === 'delete' || data.value === 'divided' || data.value === 'multiply' || data.value === 'minus' || data.value === 'plus') {
    return (
      <ActiveButton type={data.value} />
    )
  }
  else if (data.value === 'equal') {
    return (
      <EqualButton type={data.value} onPressfunction={() => alert('res')} />
    )
  }
  else if (data.value === 'empty') return ( <View style={styles.button}></View>)
  else {
    return (
      <RegularButton value={data.value} onPressfunction={() => alert('res')}/>
    )
  }
};

const styles = StyleSheet.create({
  button: {
    width: (width / 4) - 0.1,
    height: 90,
    borderTopWidth: 0.5,
    borderRightWidth:0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default PadButton;