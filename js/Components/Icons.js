import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native'; 

const iconImages = {
  plus: require('../../assets/icons/plus.png'),
  minus: require('../../assets/icons/minus.png'),
  multiply: require('../../assets/icons/cross.png'),
  divided: require('../../assets/icons/division.png'),
  delete: require('../../assets/icons/delete.png'),
  equal: require('../../assets/icons/equal.png'),
};

const Icons = (props) => (
  <Image style={{width: 20, height: 20}} source={iconImages[props.type]} />
);

Icons.propTypes = {
  type: PropTypes.string.isRequired,
};
export default Icons;