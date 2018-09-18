import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import InputButton from '../Components/InputButton';
import { Calculator } from '../Utils';

const { width, height} = Dimensions.get('window');

const datasource = [ {value: "AC"}, {value: "delete"}, {value: "divided"},{value: "multiply"}, {value: "7"},
               {value: "8"}, {value: "9"}, {value: "minus"}, {value: "4"}, {value: "5"}, {value: "6"},{value: "plus"},
               {value: "1"}, {value: "2"}, {value: "3"}, {value: "equal"}, {value: "empty"}, {value: "00"}, {value: "0"}, {value: "."} ];

class Numpad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: '0',
      acButton: 'AC' 
    }
  };

  _handlePressButton = (data) => {
    if (data.value === 'delete') this.setState({result: Calculator.delete(this.state.result)},() => this._handleACButton())
    else if (data.value === '00') this.setState({result: Calculator.hundred(this.state.result)},() => this._handleACButton())
    else if (data.value === '0') this.setState({result: Calculator.ten(this.state.result)},() => this._handleACButton())
    else if (data.value === 'AC') this.setState({result: '0'},() => this._handleACButton())
    else {
      this.setState({result: Calculator.addInput(this.state.result, data.value)},() => this._handleACButton())
    }
  };

  _handleACButton = () => {
    parseInt(this.state.result) > 0 ?  this.setState({acButton: 'C' }) : this.setState({acButton: 'AC' });
  }

  render() {
    return(
        <View style={styles.numpad}>
          <Text style={styles.resultText}>{this.state.result}</Text>
          <View style={styles.botton}>
            {datasource.map(btn => (
              <InputButton data={btn} label={this.state.acButton} onPressfunction={() => this._handlePressButton(btn)}/>
            ))}
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  numpad: {
    position: 'absolute',
    bottom: 0,
  },
  botton: {
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap',
  },
  resultText: {
    fontSize: 50,
    alignSelf: 'flex-end',
    paddingRight: 10,
    paddingLeft: 10,
  }
});

export default Numpad;