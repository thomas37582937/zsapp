import React, { Component } from 'react'
import { StyleSheet, View, Text, Button,TouchableOpacity,ScrollView,FlatList,Image } from 'react-native'
import PropTypes from 'prop-types'
import { Utils } from '../../commons';
import { Content } from './components';


const List = [
  {title:'今日百度排行',detail:'南京别墅三折拍卖',leader:'吴帝聪',money:'$100',people:'10'},
  {title:'今日百度排行',detail:'借14万到手4万',leader:'吴帝聪',money:'$100',people:'10'},
  {title:'今日百度排行',detail:'赵薇王俊凯逛菜场',leader:'吴帝聪',money:'$100',people:'10'},
  {title:'今日百度排行',detail:'火星发现有机分子',leader:'吴帝聪',money:'$100',people:'10'},
  {title:'今日百度排行',detail:'英少年被亲妈饿死',leader:'吴帝聪',money:'$100',people:'10'},
  {title:'今日百度排行',detail:'谢娜马甲线flag',leader:'吴帝聪',money:'$100',people:'10'}
]

let Nav =[
	{title:'演讲',active:true},
	{title:'广告',active:false},
	{title:'冠名',active:false},
	{title:'摊位',active:false},
]

class Meeting_1 extends Component {
	static propTypes = {

	}

	constructor(props) {
		super(props)
		this.state = {
			nav:Nav,
			list:List
		}
		this._topNav = this._topNav.bind(this);
	}

  _extraUniqueKey(item ,index){
    return "index"+index+item;
  }
	_topNav = (item) => {
		let { list,nav } = this.state;
		for(let x in nav){
			if(nav[x].active == true && item.title == true){

			}
			nav[x].active = false;
			if(nav[x].title == item.title){
				nav[x].active = true;
			}
		}
		this.setState({
			nav:nav,
			list:list,
		})
	}
	render() {
		const { navigate } = this.props.navigation;
		let { list,nav } = this.state;
		return (
			<View>
				<View style={styles.nav}>
					{nav.map((item,i)=>(
					<TouchableOpacity onPress={()=>this._topNav(item)} key={i}>
					{item.active ? 
					<Text style={[styles.navli,{color:"#e3a741"}]}>{item.title}</Text>
					:	
					<Text style={styles.navli}>{item.title}</Text>
					}
					</TouchableOpacity>
					))}
				</View>
				<View>
					<FlatList 
					keyExtractor = {this._extraUniqueKey}
					data={list}
					renderItem={({item,i})=>(
						<Content {...item} key={i} />
					)}
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	nav:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal:  Utils.pixel * 60,
		height:Utils.pixel * 120,
		alignItems: 'center',
		backgroundColor:'#fff',
		borderWidth:Utils.pixel * 3,
		borderColor: '#f2f2f2',
	},
	navli:{
		color:"#666",
		fontSize: Utils.fontRem * 1.16,
	},
})

export default Meeting_1
