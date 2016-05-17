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
    Navigator,
    View,
    TouchableOpacity
} from 'react-native';

import Splash from './src/interface/Splash';

class rnLearn extends Component {
    render() {
        return (
            <Navigator style={{flex: 1}}
                initialRoute={{
                    name: 'Splash',
                    component: Splash
                }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return (<Component {...route.params} navigator={navigator} />)
                }}
                navigationBar={this._renderNavBar()}
            />
        );
    }

    /**
     * 加载导航栏
     */
    _renderNavBar() {
        const styles = {
            title: {
                flex: 1, alignItems: 'center', justifyContent: 'center'
            },
            button: {
                flex: 1, width: 50, alignItems: 'center', justifyContent: 'center'
            },
            buttonText: {
                fontSize: 16, fontWeight: '400'
            }
        }

        var routeMapper = {
            LeftButton(route, navigator, index, navState) {
                if(index > 0) {
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Back</Text>
                        </TouchableOpacity>
                    );
                } else {
                    return null;
                }
            },
            RightButton(route, navigator, index, navState) {
                return null;
            },
            Title(route, navigator, index, navState) {
                if(route.title){
                    return (
                        <View style={styles.title}>
                            <Text style={styles.buttonText}>{route.title ? route.title : ''}</Text>
                        </View>
                    );
                }
                return null;
            }
        };
        return (
            <Navigator.NavigationBar style={{alignItems: 'center'}} routeMapper={routeMapper} />
        );
    }
}

AppRegistry.registerComponent('rntest', () => rnLearn);
