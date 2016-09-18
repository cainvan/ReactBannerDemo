/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  View
} from 'react-native';

import { Banner } from 'react-native-zkbanner';

class ReactBannerDemo extends Component {
  render() {
    var bannerImgs = [
    'http://www.10086.cn/cmpop/images/index/ad1/201609/20160914171036633bj1.jpg',
    'http://www.10086.cn/cmpop/images/index/ad1/201607/201607291033143254wN.jpg',
    'http://www.10086.cn/cmpop/images/index/ad1/201608/20160805134750658S64.jpg',
    'http://www.10086.cn/cmpop/images/index/ad1/201609/20160914115407386UXa.jpg'
  ];
    return (
        <View style={styles.map0} >
          <Banner
            style = {styles.map1}
            autoScrollTimeInterval = {2}
            imageURLStringsGroup = {bannerImgs}
            onClickBanner={(event) => {
            console.log('react' + event.nativeEvent.value);
          }}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  map0: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    alignItems:'center',
    justifyContent:'center',
  },
  map1: {
    width:Dimensions.get('window').width,
    height:200,
  },
});

AppRegistry.registerComponent('ReactBannerDemo', () => ReactBannerDemo);
