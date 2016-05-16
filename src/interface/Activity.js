'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    ListView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import {screenWidth, screenHeight, flexible} from '../commons/utils';

import LoginComponent from './Login';

export default class Activity extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * 点击事件
     */
    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Login',
                title: '用户登录',
                component: LoginComponent
            });
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Image
                        source={require('../assets/images/banner.png')}
                        style={{width: flexible(750), height: flexible(140)}}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
