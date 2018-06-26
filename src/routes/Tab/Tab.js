import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import {  TabNavigator , createBottomTabNavigator,tabBarBottom } from 'react-navigation';
import { TabView,Overlay } from 'teaset'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Utils } from '../../commons'
import Home from '../Home'
import Member from '../Member'
import Found from '../Found'
import Like from '../Like'
import {CustomTabBar} from './components'
import PropTypes from 'prop-types'
import {
  avater, right, back, home, home_0, found, found_0, mine, mine_0, goods_0, home_add, goods
} from './images'

let list = [
  { title: '首页', img: home, action: home_0, },
  { title: '发现', img: found, action: found_0, },
  { title: 'add', img: home_add, action: home_add, },
  { title: '干货', img: goods, action: goods_0, },
  { title: '我的', img: mine, action: mine_0, },
]

const Icon = ({source}) => <Image source={source} resizeMode='contain'  style={{width:Utils.fontRem,height:Utils.fontRem}}/>


const HomeScreen = ({ navigation }) => (
  <Home navigation={navigation} />
);

HomeScreen.navigationOptions = {
  tabBarLabel: '首页',
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      source={!focused ? home : home_0}
    />
  ),
};

const FoundScreen = ({ navigation }) => (
  <Found navigation={navigation} />
);

FoundScreen.navigationOptions = {
  tabBarLabel: '发现',
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      source={!focused ? found : found_0}
    />
  ),
};

const LikeScreen = ({ navigation }) => (
  <Like navigation={navigation} />
);

LikeScreen.navigationOptions = {
  tabBarLabel: '干货',
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      source={!focused ? goods : goods_0}
    />
  ),
};

const MemberScreen = ({ navigation }) => (
  <Member navigation={navigation} />
);

MemberScreen.navigationOptions = {
  tabBarLabel: '我的',
  tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      source={!focused ? mine : mine_0}
    />
  ),
};

const AddScreen = ({ navigation }) => (
  <Member navigation={navigation} />
)

AddScreen.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => <Image source={home_add} style={{ width: 60, height: 60,}} />,
  tabBarOnPress: () => {
    const overlayView = (
      <Overlay.PullView side="bottom" animated ref={v => (this.overlayPullView = v)}>
        <View style={{ height: 400, backgroundColor: '#fff' }} />
      </Overlay.PullView>
    )
    Overlay.show(overlayView)
  },
}

const tabBar = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Found: {
      screen: FoundScreen,
    },
    Add: {
      screen: AddScreen,
    },
    Like: {
      screen: LikeScreen,
    },
    Member: {
      screen: MemberScreen,
    },
  },
  {
    tabBarComponent:props=><CustomTabBar {...props} />,
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#e2a63e',
    },
  }
);


// const tabBar = TabNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       tabBarLabel: '首页',
//       tabBarIcon: ({
//         tintColor,
//         focused
//       }) => (
//           <Icon
//             source={focused ? home_0 : home }
//             selectedIconName="home"
//             />
//         ),
//     }
//   },
//   Bar: {
//     screen: Bar,
//     navigationOptions: {
//       tabBarLabel: '发现',
//       tabBarIcon: ({
//         tintColor,
//         focused
//       }) => (
//           <Icon
//             source={focused ? found_0 : found }
//             />
//         ),
//     }
//   },
//   Member: {
//     screen: Member,
//     navigationOptions: {
//       tabBarLabel: '我的',
//       tabBarIcon: ({
//         tintColor,
//         focused
//       }) => (
//           <Icon
//             source={focused ? mine_0 : mine}
//             />
//         ),
//     }
//   },
// }, {
//     tabBarPosition: 'bottom',
//     swipeEnabled: false, // 禁止左右滑动
//     tabBarOptions: {
//       activeTintColor: '#e2a63e', // 文字和图片选中颜色
//       inactiveTintColor: '#646360', // 文字和图片默认颜色
//       showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
//       indicatorStyle: {
//         height: 0
//       }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
//       style: {
//         backgroundColor: '#fff', // TabBar 背景色
//       },
//       labelStyle: {
//         fontSize: Utils.fontRem*1, // 文字大小
//       },
//     },
//   });

export default tabBar
