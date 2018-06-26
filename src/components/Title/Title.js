import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity,Text } from 'react-native'
import PropTypes from 'prop-types'
import { Utils } from '../../commons';

const Title = ({ name, right, onPress }) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <View style={styles.icon} />
      <Text style={styles.text}>{name}</Text>
    </View>
		{ right ? 
    <TouchableOpacity style={styles.right} onPress={onPress}>
      <Text style={[styles.text, styles.color]}>{right}</Text>
      <Image style={styles.img} source={require('./right.png')} />
    </TouchableOpacity> 
		: null }
	</View>
)

Title.propTypes = {
	
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor:"#fff",
		paddingHorizontal: Utils.fontRem * 0.3,
		paddingVertical: Utils.fontRem * 0.3,
	},
  left: {
		flex:1,
		flexDirection: 'row',
		alignItems: 'center',
	},
  icon: {
		width:Utils.fontRem * 0.2,
		height:Utils.fontRem,
		backgroundColor:'#e3a741',
		borderRadius: 2,
		marginRight:Utils.pixel * 5,
	},
  text: {
		fontSize: Utils.fontRem,
	},
  right: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	color: {
		color:'#999',
	},
	img:{
		marginLeft:Utils.pixel * 5,
		width:Utils.fontRem * 0.4,
		height:Utils.fontRem * 0.6,
	},
})

export default Title
