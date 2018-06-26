import React from 'react'
import { StyleSheet, TouchableOpacity, Image,Text} from 'react-native'
import PropTypes from 'prop-types'
import { Utils } from '../../../commons'

const Button = ({title,onPress,style,textStyle,imageSource,imageStyle}) => 
<TouchableOpacity  style={[styles.container,style]} onPress={onPress}>
{
	imageSource?(<Image style={imageStyle} source={imageSource}/>):null
}
   
		<Text style={[{fontSize:Utils.fontRem,color:'#fff'},textStyle]}>{title}</Text>
</TouchableOpacity>

Button.propTypes = {

}

const styles = StyleSheet.create({
	container:{
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#e3a741',
},
})

export default Button
