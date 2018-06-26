import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import PropTypes from 'prop-types'
import { Utils } from '../../commons'
import { Content,Teacher } from './components'
import {
  up,
	down,
} from './images'


const List = [
	{ title: '今日百度排行', detail: '南京别墅三折拍卖', leader: '吴帝聪', money: '$100', people: '10' },
	{ title: '今日百度排行', detail: '借14万到手4万', leader: '吴帝聪', money: '$100', people: '10' },
	{ title: '今日百度排行', detail: '赵薇王俊凯逛菜场', leader: '吴帝聪', money: '$100', people: '10' },
	{ title: '今日百度排行', detail: '火星发现有机分子', leader: '吴帝聪', money: '$100', people: '10' },
	{ title: '今日百度排行', detail: '英少年被亲妈饿死', leader: '吴帝聪', money: '$100', people: '10' },
	{ title: '今日百度排行', detail: '谢娜马甲线flag', leader: '吴帝聪', money: '$100', people: '10' }
]

let Nav = [
	{ title: '全部', active: true },
	{ title: '名人', active: false },
	{ title: '战狼', active: false },
	{ title: '讲师', active: false },
]

class Meeting_2 extends Component {
	static propTypes = {

	}

	constructor(props) {
		super(props)
		this.state = {
			nav: Nav,
			list: List,
			sort:false,
			filtrate:false,
		}
		this._topNav = this._topNav.bind(this);
	}

  _extraUniqueKey(item ,index){
    return "index"+index+item;
  }
	_topNav = (item) => {
		let { list, nav } = this.state;
		for (let x in nav) {
			if (nav[x].active == true && item.title == true) {

			}
			nav[x].active = false;
			if (nav[x].title == item.title) {
				nav[x].active = true;
			}
		}
		this.setState({
			nav: nav,
			list: list,
		})
	}
	render() {
		const { navigate } = this.props.navigation;
		let { list, nav,filtrate,sort } = this.state;
		return (
			<View>
				<View style={styles.nav}>
					{nav.map((item, i) => (
						<TouchableOpacity onPress={() => this._topNav(item)} key={i}>
							{item.active ?
								<Text style={[styles.navli, { color: "#e3a741" }]}>{item.title}</Text>
								:
								<Text style={styles.navli}>{item.title}</Text>
							}
						</TouchableOpacity>
					))}
				</View>
				<View>
					<View style={styles.fb}>
						<TouchableOpacity style={styles.fv} onPress={()=>this.setState({sort:!this.state.sort,filtrate:false})}>
							<Text style={styles.ft}>排序</Text>
							{ sort ?
							<Image source={down} resizeMode='contain' style={styles.fi} />
							:
							<Image source={up} resizeMode='contain' style={styles.fi} />
							}
						</TouchableOpacity>
						<TouchableOpacity style={styles.fv} onPress={()=>this.setState({filtrate:!this.state.filtrate,sort:false})}>
							<Text style={styles.ft}>刷选</Text>
							{ filtrate ?
							<Image  source={down} resizeMode='contain' style={styles.fi} />
							:
							<Image source={up} resizeMode='contain' style={styles.fi} />
							}
						</TouchableOpacity>
					</View>
					<View>
					<FlatList
						keyExtractor = {this._extraUniqueKey}
						data={list}
						renderItem={({ item, i }) => (
							<Teacher {...item} key={i} />
						)}
					/>
					</View>
				</View>
					{ sort || filtrate ?
					(<View style={styles.condition}>
						<ScrollView>
						<View style={styles.sort}>
						{nav.map((item, i) => (
							<TouchableOpacity style={styles.sortul} onPress={() => this._topNav(item)} key={i}>
								{item.active ?
									<Text style={[styles.sortli, { color: "#e3a741" }]}>{item.title}</Text>
									:
									<Text style={styles.sortli}>{item.title}</Text>
								}
							</TouchableOpacity>
						))}
						</View>
						</ScrollView>
					</View>)
						: null
						}
						{ sort || filtrate ? <View style={styles.bg}></View>
						: null
						}
			</View>
		)
	}
}


const styles = StyleSheet.create({
	nav: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: Utils.pixel * 60,
		height: Utils.pixel * 120,
		alignItems: 'center',
		backgroundColor: '#fff',
		borderWidth: Utils.pixel * 2,
		borderColor: '#e8e8e8',
	},
	navli: {
		color: "#666",
		fontSize: Utils.fontRem * 1.16,
	},
	fb:{
		flexDirection: 'row',
		alignItems: 'center',
		height: Utils.pixel * 120,
		backgroundColor:'#f2f2f2',
	},
	fv: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: Utils.pixel * 72,
		borderRightWidth: Utils.pixel * 2,
		borderRightColor: '#e8e8e8',
	},
	ft: {
		textAlign: 'center',
		color: "#999",
		fontSize: Utils.fontRem * 1.16,
	},
	fi:{
		marginLeft: Utils.fontRem * 0.6,
		width: Utils.fontRem * 1, 
		height: Utils.fontRem * 1,
	},
	condition:{
		position:'absolute',
		top:Utils.pixel * 240,
		left:0,
		height:Utils.height - (Utils.pixel * 240),
		width:Utils.width,
		zIndex:2,
	},
	sort:{
		flex:1,
	},
	sortul:{
		flex:1,
		height: Utils.pixel * 150,
		alignItems: 'flex-start',
		backgroundColor: '#fff',
		justifyContent: 'center',
		borderWidth: Utils.pixel * 2,
		borderColor: '#e8e8e8',
		paddingHorizontal: Utils.pixel * 60,
	},
	sortli:{
		color: "#999",
		fontSize: Utils.fontRem * 1.16,
	},
	bg:{
		position:'absolute',
		top:Utils.pixel * 240,
		left:0,
		height:Utils.height - (Utils.pixel * 240),
		width:Utils.width,
		backgroundColor:"#000",
		opacity:0.7,
		zIndex:1,
	},
})

export default Meeting_2
