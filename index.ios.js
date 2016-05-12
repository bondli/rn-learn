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

import App from './src/interface/App';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class rnLearn extends Component {
  render() {
    return (
      <NavigatorIOS style={styles.container}
        initialRoute={{
          title: '喵街',
          component: App,
        }}
      />
    );
  }
}

AppRegistry.registerComponent('rntest', () => rnLearn);
