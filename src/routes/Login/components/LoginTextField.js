import React from 'react'
import { Image, View,StyleSheet,TextInput,} from 'react-native'
import PropTypes from 'prop-types'
import { Utils } from '../../../commons'

const LoginTextField = ({imageSource,placeholder,style}) => 
<View style={style}>
<View style={styles.container}>

<Image source={imageSource} style={{width:18,height:18,paddingRight: 5}}></Image>

<View style={styles.textField}>
		<TextInput
				underlineColorAndroid='transparent'
				refs='textInput'
				style={{flex:1,fontSize:15,}}
				placeholder={placeholder}
				placeholderTextColor={color='#999'}
				onChangeText={(text) => this.setState({text})}/>
</View>
</View>
<View style={{height: 1,backgroundColor:'#d7d7d7',marginRight:0,marginLeft:0,bottom:0}}></View>
</View>

LoginTextField.propTypes = {

}

const styles = StyleSheet.create({
	container: {
		alignItems:'center',
		backgroundColor: '#fff',
		flexDirection:'row',
		height:50
},
textField:{
		paddingLeft: 10,
		paddingRight:10,
		backgroundColor: '#ffffff',
		height:40,
		flex:1,
		// alignItems:'center',
},
})

export default LoginTextField
