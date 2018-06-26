import React, { Component } from 'react'
import { StyleSheet, View, Text, Button,TouchableOpacity,ScrollView,FlatList,Image } from 'react-native'
import PropTypes from 'prop-types'
import { Utils } from '../../commons'
import { headTime } from './components';


class Auction extends Component {
	static propTypes = {

	}

	constructor(props) {
		super(props)
		this.state = {
			clock:'00:00:00',
		}
	}

	componentDidMount = () => {
    //2.定时器
		this._Clock();
	}
	componentWillUnMount = () => {
			//2.定时器
			// clearTimeout(timer)
			this.setState = (state,callback)=>{
				return;
			};
	}
	_Clock = () => {
		let newTime = (new Date()).getTime();
		let oldTime = (new Date("2018/6/21 20:11:11")).getTime();
		let start = oldTime - newTime;
		let time = this._sec_to_time(start/1000);
		this.setState({
			clock:time,
		})
    timer = setTimeout(() => {
			if(time<-1)return;
			this._Clock();
    },1000)
	}
	_sec_to_time = (s = 0) => {
		var t;
		if(s > -1){
				var hour = Math.floor(s/3600);
				var min = Math.floor(s/60) % 60;
				var sec = s % 60;
				if(hour < 10) {
						t = '0'+ hour + ":";
				} else {
						t = hour + ":";
				}

				if(min < 10){t += "0";}
				t += min + ":";
				if(sec < 10){t += "0";}
				t += sec.toFixed(0);
		}
		return t;
	}
	render() {
		const { navigate } = this.props.navigation;
		let { clock } = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.tb}></View>
				<View style={styles.top}>
					<View style={styles.left}>
						<Image style={styles.li} source={(headTime)} resizeMode="stretch" />
						<Text style={styles.lt}>正在进行</Text>
					</View>
					<View style={styles.center}>
						<Text style={styles.ct}>{clock}</Text>
					</View>
				</View>
				<Image
              style={styles.image}
              resizeMode="cover"
              source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528373402718&di=dc0667fb38462a5f2ab048d2d23901c0&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F763293ce06bf1e684ef0ea3da43ae5008d8564b8.jpg'}}
              />
				<View style={styles.img}></View>
				<View style={styles.title}></View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{},
	tb:{
		position:'absolute',
		top:0,
		left:0,
		height:Utils.fontRem * 1.5,
		width:Utils.width,
		backgroundColor:'#fff',
		opacity: 0.9,
		zIndex:1,
	},
	top:{
		position:'absolute',
		top:0,
		left:0,
		height:Utils.fontRem * 1.5,
		width:Utils.width,
		zIndex:3,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	left:{
		flex: 1,
		position:'absolute',
		top:0,
		left:0,
		height:Utils.fontRem * 1.5,
		width:Utils.width / 3,
		zIndex:2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	li:{
		position:'absolute',
		top:0,
		left:0,
		height:Utils.fontRem * 1.5,
		width:Utils.width / 3,
		zIndex:2,
	},
	lt:{
		zIndex:3,
		color:'#fff',
		fontSize: Utils.fontRem * 0.6,
	},
	ct:{
		color:'#212121',
		fontSize: Utils.fontRem * 0.6,
	},
	image:{
		width:Utils.width,
		height:Utils.fontRem * 15,
	},
	img:{},
	title:{},
})

export default Auction
