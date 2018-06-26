import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity,Text } from 'react-native'
import PropTypes from 'prop-types'
import { Utils } from '../../../commons';

const AcrossPic = ({ title, detail, leader,onPressy,index,length }) => (
  <View style={styles.container} >
    <TouchableOpacity style={styles.Touch}>
      <Image style={styles.img} source={require('../images/avater.png')} resizeMode="contain" />
      <View style={styles.box}>
        <Text style={[styles.text,styles.tier]}>{title}</Text>
        <Text style={styles.text}>{detail}</Text>
      </View>
    </TouchableOpacity>
    {index + 1 == length ? 
    <TouchableOpacity style={styles.Touch}>
      <Image style={styles.img} source={require('../../Tab/images/home_add.png')} resizeMode="contain" />
      <View style={styles.box}>
        <Text style={styles.text}></Text>
        <Text style={styles.text}>更多</Text>
      </View>
    </TouchableOpacity>
    : null
    }
  </View>
)

AcrossPic.propTypes = {

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Touch:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: Utils.fontRem,
    marginVertical: Utils.fontRem,
  },
  img:{
    width:Utils.fontRem * 3.5,
    height:Utils.fontRem * 3.5,
  },
  tier:{
    fontWeight: 'bold',
    color:"#333",
    marginVertical: Utils.fontRem*0.2,
  },
  box:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    flex: 1,
    fontSize: Utils.fontRem * 0.5,
  },
})

export default AcrossPic
