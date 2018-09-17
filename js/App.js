import React, {Component} from 'react';
import {Platform, StyleSheet, SafeAreaView, View} from 'react-native';
import Numpad from './Components/Numpad';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <View></View>
        <Numpad />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
