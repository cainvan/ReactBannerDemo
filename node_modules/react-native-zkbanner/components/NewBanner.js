import React, { Component, PropTypes } from 'react';
import { requireNativeComponent} from 'react-native';

var NewBanner = requireNativeComponent('NewBanner', NewBannerView);

export default class NewBannerView extends Component {
   static propTypes = {
    /**
    *
    * 定义组件需要传到原生端的属性
    * 使用React.PropTypes来进行校验
    */

     //
    autoScrollTimeInterval: PropTypes.number,
    //
    autoScroll: PropTypes.bool,
    //
    onClickBanner: PropTypes.func,
     //网络图片数组
    imageURLStringsGroup:PropTypes.array,
    //本地图片
    localizationImageNamesGroup:PropTypes.array,
  };
  render() {
    return (
      <NewBanner {...this.props} />
    );
  }
}
