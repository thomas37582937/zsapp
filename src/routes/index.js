import { createStackNavigator } from 'react-navigation'
import tabBar from './Tab'
import {Meet_0,Meet_1,Meet_2,Meet_3} from './Meeting'
import Login from './Login'
import Auction from './Auction'
import { StackOptions } from '../components';

//https://reactnavigation.org/docs/zh-Hans/navigation-options-resolution.html
//第一次：解决导航栏只出现在子页面的问题(此处未解决，发生不能返回问题)

//第二次：解决，对navigationOptions添加header：null

const Routes = createStackNavigator(
  {
    Index:{
      screen:tabBar,
      navigationOptions:{
        header:null,
      }
    },
    Login:{
      screen:Login,
      navigationOptions:{
        header:null,
      }
    },
    Meet_0:{
      screen: Meet_0,
      navigationOptions:({navigation}) => StackOptions({navigation,title:'约人参会'})
    },
    Meet_1:{
      screen: Meet_1,
      navigationOptions:({navigation}) => StackOptions({navigation,title:'约场演讲'})
    },
    Meet_2:{
      screen: Meet_2,
      navigationOptions:({navigation}) => StackOptions({navigation,title:'导师预约'})
    },
    Meet_3:{
      screen: Meet_3,
      navigationOptions:({navigation}) => StackOptions({navigation,title:'项目分享'})
    },
    Auction:{
      screen: Auction,
      navigationOptions:({navigation}) => StackOptions({navigation,title:'演讲时间拍卖'})
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'float',//边缘滑动返回上级页面时动画效果。
    mode:'card',//定义跳转风格。
  },
)

export default Routes
