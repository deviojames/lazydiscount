import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, Animated } from 'react-native';
import InputButton from '../Components/InputButton';
import Icons from '../Components/Icons';
import { Calculator } from '../Utils';

const { width, height} = Dimensions.get('window');

const datasource = [ {value: "AC"}, {value: "delete"}, {value: "divided"},{value: "multiply"}, {value: "7"},
               {value: "8"}, {value: "9"}, {value: "minus"}, {value: "4"}, {value: "5"}, {value: "6"},{value: "plus"},
               {value: "1"}, {value: "2"}, {value: "3"}, {value: "equal"}, {value: "empty"}, {value: "00"}, {value: "0"}, {value: "."}, {value: "empty"} ];

class Numpad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: '0',
      acButton: 'AC',
      secondResult: '0',
      isShowSecondResult: false,
      symbol: null
    }
    this.position = new Animated.ValueXY(0, 0);
  };
  
  _avoidNewValue = (symbol) => {    
    if(!this.state.isShowSecondResult) {
      Animated.parallel([
        Animated.spring(this.position, {
            toValue: { x: 0, y: -90 },
            tension: 600,
            friction: 600
        }).start( 
          this.setState({ 
            isShowSecondResult: true,
            symbol: symbol }) 
          ),
      ]);
    } else {
      const calculatedResult = this.calculate();
      this.setState({
        symbol: symbol,
        result: calculatedResult,
        secondResult: '0'
      })
    }
  };

  calculate = () => {
    if (this.state.symbol === "plus")
      return Calculator.plus(this.state.result, this.state.secondResult);
    else if (this.state.symbol === "minus")
      return Calculator.minus(this.state.result, this.state.secondResult);
    else if (this.state.symbol === "multiply")
      return Calculator.multiply(this.state.result, this.state.secondResult);
    else if (this.state.symbol === "divided")
      return Calculator.divided(this.state.result, this.state.secondResult);
  }

  _resultPress = () => {
    const calculatedResult = this.calculate();
    
    Animated.spring(this.position, {
        toValue: { x: 0, y: 0 },
        tension: 600,
        friction: 600
    }).start( this.setState({ 
      isShowSecondResult: false,
      result: calculatedResult,
      secondResult: '0',
      symbol: null
    }) );
  }

  _handleACButton = () => {
    parseInt(this.state.result) > 0 ?  this.setState({acButton: 'C' }) : this.setState({acButton: 'AC' });
    if(this.state.isShowSecondResult) {
      Animated.spring(this.position, {
        toValue: { x: 0, y: 0 },
        tension: 600,
        friction: 600
      }).start( this.setState({ isShowSecondResult: false }) );
    }
  };

  _handlePressButton = (data) => {
    if (data.value === 'delete') {
      if (!this.state.isShowSecondResult)
        this.setState({result: Calculator.delete(this.state.result)});
      else
        this.setState({secondResult: Calculator.delete(this.state.secondResult)});
    }
    else if (data.value === '00') {
      if (!this.state.isShowSecondResult)
        this.setState({result: Calculator.hundred(this.state.result)});
      else 
        this.setState({secondResult: Calculator.hundred(this.state.secondResult)});
    }
    else if (data.value === '0') {
      if (!this.state.isShowSecondResult)
        this.setState({result: Calculator.ten(this.state.result)});
      else
        this.setState({secondResult: Calculator.ten(this.state.secondResult)});
    }
    else if (data.value === 'AC') {
      this.setState({result: '0', secondResult: '0'},() => this._handleACButton());
    }
    else if (data.value === 'plus') this._avoidNewValue("plus");
    else if (data.value === 'minus') this._avoidNewValue("minus");
    else if (data.value === 'multiply') this._avoidNewValue("multiply");
    else if (data.value === 'divided') this._avoidNewValue("divided");
    else if (data.value === 'equal') this._resultPress();
    else {
      if (!this.state.isShowSecondResult)
        this.setState({result: Calculator.addInput(this.state.result, data.value)})
      else
        this.setState({secondResult: Calculator.addInput(this.state.secondResult, data.value)})
    }
  };

  render() {
    
    return(
        <View style={styles.numpad}>
          <Animated.View  style={ this.position.getLayout() } >
            <Animated.Text style={[styles.resultText,{ color: 'black', }]}>{this.state.result}</Animated.Text>
          </Animated.View>
          { this.state.isShowSecondResult ? <View style={styles.symbol}><Icons type={this.state.symbol} color="#FFB811" /></View> : null }
          { this.state.isShowSecondResult ? <View><Text style={[styles.secondResultText,{ color: 'black', }]}>{this.state.secondResult}</Text></View>  : null }
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
  symbol:{
    position: 'absolute',
    top: -85,
    paddingRight: 50,
    alignSelf: 'flex-end'

  },
  numpad: {
    position: 'absolute',
    bottom: 0,
  },
  botton: {
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-around',
  },
  resultText: {
    fontSize: 50,
    alignSelf: 'flex-end',
    paddingRight: 10,
    paddingLeft: 10,
    bottom: 0,
    position: 'absolute'
  },
  secondResultText: {
    fontSize: 50,
    alignSelf: 'flex-end',
    paddingRight: 10,
    paddingLeft: 10,
    bottom: 0,
    position: 'absolute'
  },
  functionLabel: {
    fontSize: 40,
    alignSelf: 'flex-end',
    paddingRight: 50,
    bottom: 55,
    position: 'absolute'
  }
});

export default Numpad;