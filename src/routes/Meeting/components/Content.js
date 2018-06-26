import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Utils } from '../../../commons'
import { right, back,head } from '../images'

const Content = ({title,detail,money,onPress}) => (
  <View style={styles.li}>
    <Image resizeMode="cover" style={styles.img} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528892066473&di=f2f953333751e6025544b083abe67783&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201502%2F08%2F20150208122732_Q4edT.jpeg'}} />
    <View style={styles.right}>
      <View style={styles.v_0}>
        <Text style={styles.time}>30分钟</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.v_1}>
        <Text style={styles.detail}>{detail}</Text>
        <Text style={styles.detail}>{detail}</Text>
      </View>
      <View style={styles.v_2}>
        <Text style={styles.money}>{money}</Text>
      </View>
    </View>
  </View>
)

Content.propTypes = {
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
		flex: 1,
		fontSize: Utils.fontRem * 0.8,
		color:"#999",
	},
	v_0:{
		flex: 1,
		flexDirection: 'row',
		alignItems:'center',
	},
	v_1:{
		flex: 1,
		marginTop: Utils.fontRem * 0.5,
	},
	v_2:{
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
})

export default Content
