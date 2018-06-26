import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import { SearchInput } from 'teaset'
import Icon from 'react-native-vector-icons/Ionicons'
import {Utils} from '../../commons'

const Head = ({style,location,leftOnPress,placeholder,rightOnPress}) => 
	<View style={[style,styles.container]}>
		<TouchableOpacity style={[styles.left,styles.m_H]} onPress={leftOnPress}>
			<Text style={styles.text}>{location}</Text>
			<Image source={require('./whiteDown.png')}  style={styles.img}/>
		</TouchableOpacity>
		<View style={styles.right}>
			<SearchInput style={styles.input} inputStyle={{fontSize: Utils.fontRem*0.8}} placeholder={placeholder}/>
			<TouchableOpacity onPress={rightOnPress}>
				<Image source={require('./message.png')}  style={[styles.img,styles.m_H]}/>
			</TouchableOpacity>
		</View>
	</View>

Head.propTypes = {
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent:'center',
	},
	left:{
		flexDirection: 'row',
		alignItems:'center',
		justifyContent: 'center',
	},
	text:{
		color:'#fff',
		fontSize: Utils.fontRem * 0.8,
		marginRight: Utils.fontRem * 0.3,
	},
	right:{
		flex:1,
		flexDirection: 'row',
		justifyContent:'center',
		alignItems: 'center',
	},
	input:{
		flex: 1,
		justifyContent:'center',
		alignItems: 'center',
		borderRadius: 20,
		height:Utils.fontRem * 1.5,
	},
	img:{
		width:Utils.fontRem * 0.8,
		height:Utils.fontRem * 0.8,
	},
	m_H:{
		marginHorizontal: Utils.fontRem * 0.8,
	},
})

export default Head
