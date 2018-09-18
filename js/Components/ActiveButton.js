import PropTypes from 'prop-types';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Icons from './Icons';

const width = Dimensions.get('window').width;

const ActiveButton = (props) => (
  <TouchableHighlight style={styles.button} onPress={props.onPressfunction}  underlayColor={props.underlayColor}>
    <Icons type={props.type} />
  </TouchableHighlight>
);

const RegularButton = (props) => (
  <TouchableHighlight style={styles.button} onPress={props.onPressfunction}  underlayColor={props.underlayColor}>
    <Text style={styles.regularLable}>{props.value}</Text>
  </TouchableHighlight>
);

const EqualButton = (props) => (
  <TouchableHighlight style={styles.equalBtn} onPress={props.onPressfunction} underlayColor={props.underlayColor}>
    <Icons type={props.type} />
  </TouchableHighlight>
);

const ACButton = (props) => (
  <TouchableHighlight style={styles.button} onPress={props.onPressfunction} underlayColor={props.underlayColor}>
    <Text style={styles.acLabel}>{props.label}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    width: (width / 4) - 0.1,
    height: 90,
    borderTopWidth: 0.5,
    borderRightWidth:0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  regularLable: {
    fontSize: 20,
    zIndex: 1,
    color: '#424242',
  },
  acLabel:{
    fontSize: 20,
    zIndex: 1,
    color: '#FFB811'
  },
  equalBtn: {
    width: (width / 4) - 0.1,
    height: 180,
    borderTopWidth: 0.5,
    borderRightWidth:0.3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 0,
    zIndex: 1,
    backgroundColor: '#FFB811'
  },
});

ActiveButton.propTypes = {
  type: PropTypes.string.isRequired,
  underlayColor: PropTypes.string
};

ActiveButton.defaultProps = {
  underlayColor: '#E0E0E0'
};

RegularButton.propTypes = {
  value: PropTypes.string.isRequired,
  underlayColor: PropTypes.string
};

RegularButton.defaultProps = {
  underlayColor: '#E0E0E0'
};

EqualButton.propTypes = {
  type: PropTypes.string.isRequired,
  underlayColor: PropTypes.string
};

EqualButton.defaultProps = {
  underlayColor: '#FFAA00'
};

ACButton.propTypes = {
  type: PropTypes.string.isRequired,
  underlayColor: PropTypes.string,
  lable: PropTypes.string
};

ACButton.defaultProps = {
  underlayColor: '#E0E0E0',
  lable: 'AC',
};



export { ActiveButton, RegularButton, EqualButton, ACButton };
