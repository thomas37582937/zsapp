import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity,Text } from 'react-native'
import PropTypes from 'prop-types'
import { Utils } from '../../../commons';

const AcrossCard = ({ title, detail, leader,onPress,button }) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <Text style={[styles.text,styles.title]}>{title}</Text>
      <Text style={[styles.text,styles.detail]}>{detail}</Text>
      <Text style={[styles.text,styles.leader]}>主讲:{leader}</Text>
      <TouchableOpacity onPress={onPress}>
        <Image 
        style={styles.button}
        source={require('../images/button_yellow.png')} resizeMode="contain" />
        <View style={styles.buttonText}>
          <Text>{button}</Text>
        </View>
      </TouchableOpacity>
    </View>
    <Image style={styles.img} resizeMode="contain" source={{uri:'http://img3.duitang.com/uploads/item/201508/02/20150802102918_UZYdH.jpeg'}}/>
	</View>
)

AcrossCard.propTypes = {

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',
    height:Utils.fontRem * 10,
    width:Utils.width*0.8,
    borderWidth:Utils.pixel * 2,
    borderRadius: Utils.pixel * 10,
    borderColor:'#999',
    marginHorizontal: Utils.fontRem*0.5,
    marginVertical: Utils.fontRem*0.3,
    paddingHorizontal: Utils.fontRem*0.3,
    paddingVertical: Utils.fontRem*0.5,
  },
  left:{
    flex: 1,
    flexDirection:'column',
    marginRight: Utils.fontRem*0.5,
  },
  text:{
    fontSize: Utils.fontRem * 0.8,
  },
  title:{
    fontWeight: 'bold',
    color:'#333',
    fontSize: Utils.fontRem * 1,
    marginBottom: Utils.fontRem*0.2,
  },
  detail:{
    marginBottom: Utils.fontRem*0.2,
    height:Utils.fontRem * 3,
  },
  leader:{
    marginBottom: Utils.fontRem*0.4,
  },
  img:{
    borderRadius:Utils.pixel * 10,
    borderWidth:Utils.pixel * 2,
    width:Utils.fontRem * 4,
    height: Utils.fontRem * 4,
  },
  button:{
    width:Utils.fontRem * 4,
    height: Utils.fontRem * 1.2,
  },
  buttonText:{
    position:'absolute',
    top:0,
    left:0,
    width:Utils.fontRem * 4,
    height: Utils.fontRem * 1.2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default AcrossCard
