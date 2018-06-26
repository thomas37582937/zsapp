import React from 'react'
import { StyleSheet, View, Button, Image,TouchableOpacity,Text } from 'react-native'
import { Utils } from '../../commons'
import back from './back.png'

const Icon = ({ source }) => <Image source={source} resizeMode='contain' style={styles.icon} />

const StackOptions = ({ navigation, title = '' }) => {
	let { state, goBack,navigate } = navigation;
	// 用来判断是否隐藏或显示header
	let header;
	const headerStyle = {paddingHorizontal: Utils.pixel * 60, backgroundColor: '#fff',	borderBottomWidth:Utils.pixel * 2,borderBottomColor:'#e8e8e8', };
	const headerTitle = title;
	const headerTitleStyle = {fontSize: Utils.fontRem * 0.9, color: '#666', fontWeight: 'bold' ,flex:1,textAlign: 'center'}
	const headerBackTitle = false;
	const headerLeft = (
		<TouchableOpacity onPress={() => { goBack() }}>
			<Icon source={back}/>
		</TouchableOpacity>
	);
	const headerRight = (
		<View style={styles.icon}></View>
	);
	return {headerStyle,headerTitle,headerTitleStyle,headerBackTitle,headerLeft,header,headerRight}
};

const styles = StyleSheet.create({
	icon:{
		width: Utils.fontRem * 1, 
		height: Utils.fontRem * 1,
	},
})

	export default StackOptions
