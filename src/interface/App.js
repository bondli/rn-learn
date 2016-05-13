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
import {styles} from './styles/app';

import ActivityComponent from './Activity';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

/**
 * 程序入口
 */
export default class App extends Component {
  /**
   * 初始化
   */
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false
    };
  }

  _pressButton() {
    const { navigator } = this.props;
    if(navigator) {
      navigator.push({
        name: 'Activity',
        title: '活动详情',
        component: ActivityComponent,
      })
    }
  }

  /**
   * 异步请求数据
   */
  _fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true
        });
      })
      .done();
  }

  /**
   * 组件渲染之前
   */
  componentDidMount() {
    this._fetchData();
  }

  /**
   * 组件渲染
   */
  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ScrollView>
        {this.renderHeader()}
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderMovie}
          style={styles.listView}
        />
      </ScrollView>
    );
  }

  /**
   * banner图
   */
  renderHeader() {
    return (
      <TouchableOpacity onPress={this._pressButton.bind(this)}>
        <Image
          source={require('../assets/images/banner.png')}
          style={{width: flexible(750), height: flexible(140)}}
        />
      </TouchableOpacity>
    );
  }

  /**
   * 加载中
   */
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  /**
   * 单个记录渲染
   */
  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={[styles.title, movie.title.length>10 && styles.smallfont]}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }

};
