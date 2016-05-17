'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    ListView,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {screenWidth, screenHeight, flexible} from '../commons/utils';
import {styles} from './styles/login';

export default class Login extends React.Component {

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
            navigator.pop();
        }
    }

    render() {
        return (
            <View style={{backgroundColor: '#f4f4f4', flex: 1, paddingTop: 70}}>
                <Image
                    style={styles.app_image}
                    source={{uri: 'http://pic.wenwen.soso.com/p/20100204/20100204182144-2129109565.jpg'}}/>
                <TextInput
                    style={styles.username_input}
                    placeholder='QQ号/手机号/邮箱'
                    numberOfLines={1}
                    autoFocus={true}
                    underlineColorAndroid={'transparent'}
                    textAlign='center'
                />
                <View style={{height:1,backgroundColor:'#f4f4f4'}} />
                <TextInput
                    style={styles.pwd_input}
                    placeholder='密码'
                    numberOfLines={1}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={true}
                    textAlign='center'
                />
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <View style={styles.view_submit}>
                        <Text style={{color:'#fff'}}>登录</Text>
                    </View>
                </TouchableOpacity>

                <View style={{flex:1,flexDirection:'row',alignItems: 'flex-end',bottom:10}}>
                    <Text style={styles.view_unlogin}>
                        无法登录?
                    </Text>
                    <Text style={styles.view_register}>
                        新用户
                    </Text>
                </View>
            </View>
        );
    }
}
