import React, { Component } from 'react'
import { StyleSheet, View, Text, Button,TouchableOpacity,ScrollView,FlatList,Image } from 'react-native'
import PropTypes from 'prop-types'
import { AcrossShare } from '../Home/components'
import { Utils } from '../../commons';


const List = [
  {title:'今日百度排行',detail:'南京别墅三折拍卖',leader:'吴帝聪',money:'$100',people:'10'},
  {title:'今日百度排行',detail:'借14万到手4万',leader:'吴帝聪',money:'$100',people:'10'},
  {title:'今日百度排行',detail:'赵薇王俊凯逛菜场',leader:'吴帝聪',money:'$100',people:'10'},
  {title:'今日百度排行',detail:'火星发现有机分子',leader:'吴帝聪',money:'$100',people:'10'},
  {title:'今日百度排行',detail:'英少年被亲妈饿死',leader:'吴帝聪',money:'$100',people:'10'},
  {title:'今日百度排行',detail:'谢娜马甲线flag',leader:'吴帝聪',money:'$100',people:'10'}
]

class Meeting_3 extends Component {
	static propTypes = {

	}

	constructor(props) {
		super(props)
		this.state = {
			list:List
		}
	}

  _extraUniqueKey(item ,index){
    return "index"+index+item;
  }
	render() {
    const { navigate } = this.props.navigation;
		let { list } = this.state;
		return (
			<View style={styles.container}>
				<FlatList 
				keyExtractor = {this._extraUniqueKey}
				data={list}
				renderItem={({item,i})=>(
					<AcrossShare 
						key = {i}
						{...item}
						button = '立即抢单'
						money = '1000'
					/>
				)}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		backgroundColor:'#fff',
	},
})

export default Meeting_3
