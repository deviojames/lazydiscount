import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { ActiveButton, EqualButton, RegularButton, ACButton } from './ActiveButton';

const width = Dimensions.get('window').width;

class InputButton extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const data = this.props.data;
    if (data.value === 'delete' || data.value === 'divided' ||
        data.value === 'multiply' || data.value === 'minus' ||
        data.value === 'plus') {
      return (
        <ActiveButton type={data.value} onPressfunction={this.props.onPressfunction}/>
      )
    }
    else if (data.value === 'equal') {
      return (
        <EqualButton type={data.value} onPressfunction={this.props.onPressfunction} />
      )
    }
    else if (data.value === 'AC') {
      return (
        <ACButton type={data.value} label={this.props.label} onPressfunction={this.props.onPressfunction} />
      )
    }
    else if (data.value === 'empty') return ( <View style={styles.button}></View>)
    else {
      return (
        <RegularButton value={data.value} onPressfunction={this.props.onPressfunction}/>
      )
    }
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


export default InputButton;