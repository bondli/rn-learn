'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import App from './App';

export default class SplashPage extends Component {
    componentWillMount() {
        var { navigator } = this.props;
        setTimeout(() => {
            navigator.replace({
                name: 'App',
                title : '喵街',
                component: App,
            });
        }, 3000);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: 'http://news.winshang.com/member/FCK/2015/9/10/2015910115644437625x.jpg'}} style={styles.backgroundImage}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        backgroundColor: 'transparent',
        resizeMode: 'cover'
    }
});