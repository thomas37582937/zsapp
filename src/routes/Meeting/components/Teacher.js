import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Utils } from '../../../commons'
import { star } from '../images'

const Teacher = ({title,detail,leader,money,numStar = 5,onPress}) => {
  const stars = []
  for (let i = 0; i < numStar; i++) {
    stars.push(<Image key={i} resizeMode="cover" style={styles.star} source={(star)}/>)
  }
	return(<View style={styles.li}>
    <Image resizeMode="cover" style={styles.img} source={(star)}/>
    <View style={styles.right}>
      <View style={styles.v_0}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.v_1}>
        <Text style={[styles.detail,{color:"#212121"}]}>{leader}</Text>
        <Text style={styles.detail}>{leader}</Text>
      </View>
      <View style={styles.v_2}>
					{stars}
      </View>
    </View>
  </View>)
}

Teacher.propTypes = {
}

const styles = StyleSheet.create({
	li:{
		flex: 1,
		flexDirection: 'row',
		width:Utils.width,
		padding: Utils.pixel * 60,
		paddingHorizontal: Utils.pixel * 72,
		backgroundColor:'#fff',
		borderBottomWidth:Utils.pixel * 3,
		borderBottomColor:'#f2f2f2',
	},
	img:{
		width:Utils.fontRem * 4,
		height:Utils.fontRem * 4,
		borderRadius: Utils.fontRem * 4,
		marginRight:Utils.pixel * 57,
	},
	right:{
		flex: 1,
		flexDirection: 'column',
	},
	time:{
		borderWidth:Utils.pixel * 2,
		borderColor:'#ff520e',
		color:'#ff520e',
		borderRadius:Utils.fontRem * 0.5,
		textAlign:'center',
		fontSize:Utils.fontRem * 0.6,
		textAlign:'center',
		paddingHorizontal: Utils.fontRem * 0.3,
	},
	title:{
		fontSize: Utils.fontRem * 0.9,
		color:"#212121",
	},
	detail:{
		fontSize: Utils.fontRem * 0.8,
		color:"#999",
		marginRight:Utils.fontRem * 1,
	},
	v_0:{
		flex: 1,
		flexDirection: 'row',
		alignItems:'center',
	},
	v_1:{
		flex: 1,
		flexDirection: 'row',
		marginTop: Utils.fontRem * 0.5,
	},
	v_2:{
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: Utils.fontRem * 0.5,
	},
	money:{
		flex: 1,
		fontSize: Utils.fontRem * 0.7,
		color:"#ff520e",
	},
	star:{
		width:Utils.fontRem * 1,
		height:Utils.fontRem * 1,
		marginRight:Utils.pixel * 6,
	},
})

export default Teacher
