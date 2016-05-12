/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';

class HelloWorld extends Component {
  render() {
    return (
      <Text style={styles.text}>
        hello world!
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 20,
    margin: 100,
    textAlign: 'center'
  },
  container: {
    flex: 1
  }
});

class rntest extends Component {
  render() {
    return (
      <NavigatorIOS style={styles.container}
        initialRoute={{
          title: '喵街',
          component: HelloWorld,
        }}
      />
    );
  }
}

AppRegistry.registerComponent('rntest', () => rntest);

