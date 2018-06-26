import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { ListRow } from 'teaset'
import { navigation,StackNavigator } from 'react-navigation'
import PropTypes from 'prop-types'
import { Utils } from '../../commons'
import { Head, Space } from '../../components'
import { MHeader, Nav, Title } from './components'
import {
  tutor,
  store,
  right,
  back,
  head,
  accomplish,
  Merchants,
  appointment,
  arrows,
  enter,
  mission,
  obligation,
  participation,
  refund,
} from './images'

const navTab = [
  { icon: obligation, name: '待付款', badge: '1' },
  { icon: participation, name: '待参与', badge: '2' },
  { icon: refund, name: '退款', badge: '3' },
  { icon: accomplish, name: '已完成', badge: '4' },
]

class Member extends Component {
  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }
  _extraUniqueKey(item ,index){
    return "index"+index+item;
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <MHeader name="吴鑫" level="学员" onPress={() => {}} />
        <View style={styles.integral}>
          <View style={styles.integral_v}>
            <Image style={styles.integral_i} resizeMode="contain" source={mission} />
            <Text style={styles.integral_t}>积分任务</Text>
          </View>
          <View style={styles.integral_br} />
          <View style={styles.integral_v}>
            <Image style={styles.integral_i} resizeMode="contain" source={store} />
            <Text style={styles.integral_t}>积分商城</Text>
          </View>
        </View>
        <Space size={0.5} />
        <Title name="我的订单" right="true" />
        <View style={styles.nav}>
          {navTab.map((item, i) => <Nav {...item} key={i} />)}
        </View>
        <Space size={0.5} />
        <Title icon={enter} name="入驻中商汇" right="true" />
        <Title icon={Merchants} name="招商任务" right="true" />
        <Title icon={appointment} name="我的预约" right="true" />
        <Space size={0.5} />
        <Title icon={tutor} name="我发布的活动" right="true" />
        <Title icon={tutor} name="导师设置" right="true" />
        <Space size={0.5} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Utils.height,
    width: Utils.width,
    flexDirection: 'column',
  },
  integral: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: Utils.fontRem * 3,
  },
  integral_v: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Utils.fontRem * 1.2,
  },
  integral_br: {
    width: Utils.pixel * 2,
    backgroundColor: '#f2f2f2',
  },
  integral_i: {
    width: Utils.fontRem * 1.6,
    height: Utils.fontRem * 1.6,
    marginRight: Utils.fontRem * 1,
  },
  integral_t: {
    fontSize: Utils.fontRem * 1,
    color: '#212121',
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
})

export default Member
