import React, { Component } from 'react'
import { StyleSheet, View, Text, Button,TouchableOpacity,ScrollView,FlatList,Image } from 'react-native'
import PropTypes from 'prop-types'
import { Utils } from '../../commons';


const List = [
  {title:'今日百度排行',detail:'南京别墅三折拍卖',leader:'吴帝聪',money:'$100',people:'10'},
  {title:'今日百度排行',detail:'借14万到手4万',leader:'吴帝聪',money:'$100',people:'10'},
  {title:'今日百度排行',detail:'赵薇王俊凯逛菜场',leader:'吴帝聪',money:'$100',people:'10'},
  {title:'今日百度排行',detail:'火星发现有机分子',leader:'吴帝聪',money:'$100',people:'10'},
  {title:'今日百度排行',detail:'英少年被亲妈饿死',leader:'吴帝聪',money:'$100',people:'10'},
  {title:'今日百度排行',detail:'谢娜马甲线flag',leader:'吴帝聪',money:'$100',people:'10'}
]

class Meeting_0 extends Component {
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
			<View>
				<FlatList 
				keyExtractor = {this._extraUniqueKey}
				data={list}
				renderItem={({item,i})=>(
					<View style={styles.li} key={i}>
						<Image resizeMode="cover" style={styles.img} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528892066473&di=f2f953333751e6025544b083abe67783&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201502%2F08%2F20150208122732_Q4edT.jpeg'}} />
						<View style={styles.right}>
							<Text style={styles.title}>{item.title}</Text>
							<View style={styles.v_0}>
								<Text style={styles.detail}>{item.detail}</Text>
								<Text style={styles.detail}>{item.detail}</Text>
							</View>
							<View style={styles.v_1}>
								<Text style={styles.money}>{item.money}</Text>
								<TouchableOpacity onPress={() => navigate('Meet_0')}>
									<View style={styles.on}>
										<Text style={styles.onT}>{item.people}人已报名</Text>
									</View>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				)}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	li:{
		flex: 1,
		flexDirection: 'row',
		width:Utils.width,
		padding: Utils.pixel * 30,
		backgroundColor:'#fff',
		borderBottomWidth:Utils.pixel * 3,
		borderBottomColor:'#f2f2f2',
	},
	img:{
		width:Utils.width * (480/1080),
		height:Utils.width * (320/1080),
		borderRadius: Utils.pixel * 9,
		marginRight:Utils.pixel * 30,
	},
	right:{
		flex: 1,
		flexDirection: 'column',
	},
	title:{
		flex: 1,
		fontSize: Utils.fontRem * 0.9,
		color:"#212121",
	},
	detail:{
		flex: 1,
		fontSize: Utils.fontRem * 0.8,
		color:"#999",
	},
	v_0:{
		flex: 1,
		marginTop: Utils.fontRem * 0.5,
	},
	v_1:{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: Utils.fontRem * 0.5,
	},
	money:{
		flex: 1,
		fontSize: Utils.fontRem * 0.7,
		color:"#ff520e",
	},
	on:{
		flex: 1,
		borderRadius: Utils.pixel * 10,
		borderWidth: Utils.pixel * 2,
		backgroundColor: '#fff1ec',
		borderColor: '#ff520e',
		padding: Utils.pixel * 10,
	},
	onT:{
		color:'#ff520e',
		fontSize: Utils.fontRem * 0.7,
	},
})

export default Meeting_0
