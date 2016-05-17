'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    ListView,
    View,
    Text,
    Image,
    WebView
} from 'react-native';


export default class Webview extends React.Component {

    constructor(props) {
        super(props);
        const { navigator } = this.props;
        this.state = {
            url : props.url
        };
    }


    render() {
        return (
            <View style={{flex: 1, paddingTop: 70}}>
                <WebView
                    source={{uri:this.state.url}}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                >
                </WebView>
            </View>
        );
    }
}
