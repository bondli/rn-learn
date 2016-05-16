'use strict';

import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
    app_image:{
        borderRadius:35,
        height:70,
        width:70,
        marginTop:40,
        alignSelf:'center',
    },
    username_input:{
        backgroundColor:'#fff',
        marginTop:10,
        height:35,
    },
    pwd_input:{
        backgroundColor:'#fff',
        height:35,
    },
    view_submit:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        height:35,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view_unlogin:{
        fontSize:12,
        color:'#63B8FF',
        marginLeft:10,
    },
    view_register:{
        fontSize:12,
        color:'#63B8FF',
        marginRight:10,
        alignItems:'flex-end',
        flex:1,
        flexDirection:'row',
        textAlign:'right',
    }
});
