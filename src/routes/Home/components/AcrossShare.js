import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity,Text } from 'react-native'
import PropTypes from 'prop-types'
import { Utils } from '../../../commons';

const AcrossShare = ({ title, detail, leader,onPress,button,money }) => (
  <View style={styles.container}>
    <View style={styles.top}>
      <View style={styles.left}>
        <Text style={[styles.text,styles.title]}>{title}</Text>
        <Text style={[styles.text,styles.detail]}>{detail}</Text>
        <Text style={[styles.text,styles.leader]}>主讲:{leader}</Text>
      </View>
      <View style={styles.right}>
        <Image style={styles.img} resizeMode="contain" source={{uri:'http://img3.duitang.com/uploads/item/201508/02/20150802102918_UZYdH.jpeg'}}/>
      </View>
    </View>
    <View style={styles.bottom}>
        <View style={styles.bl}>
          <Text style={{fontSize:Utils.fontRem * 0.8}}>佣金：<Text style={{color:'#FF9933'}}>￥{money}</Text></Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Image 
          style={styles.button}
          source={require('../images/button_orange.png')} resizeMode="contain" />
          <View style={styles.buttonText}>
            <Text>{button}</Text>
          </View>
        </TouchableOpacity>
    </View>
  </View>
)

AcrossShare.propTypes = {

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    width:Utils.width,
    paddingHorizontal: Utils.fontRem*0.5,
    paddingVertical: Utils.fontRem*0.8,
    borderBottomWidth: Utils.pixel * 1,
    borderColor:'#999',
  },
  top:{
    flex: 1,
    flexDirection:'row',
  },
  left:{
    flex: 1,
    flexDirection:'column',
    marginRight: Utils.fontRem*0.5,
  },
  right:{
    paddingHorizontal: Utils.fontRem*0.5,
    paddingVertical: Utils.fontRem*0.8,
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
  bottom:{
    flex: 1,
    flexDirection:"row",
  },
  bl:{
    flex: 1,
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

export default AcrossShare
