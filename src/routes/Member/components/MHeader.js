import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Utils } from '../../../commons'
import { right, back,head } from '../images'

const MHeader = ({name,level,onPress}) => (
  <View style={styles.container}>
    <View style={styles.h_l}>
      <Image style={styles.h_l_Img} resizeMode="contain" source={head}/>
    </View>
    <View style={styles.h_c}>
      <Text style={styles.h_c_t}>{name}</Text>
      <View style={styles.h_c_s}>
        <Text style={styles.h_c_s_t}>{level}</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.h_r} onPress={onPress}>
      <Image style={styles.h_r_Img} resizeMode="contain" source={right} />
    </TouchableOpacity>
  </View>
)

MHeader.propTypes = {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#29251e',
    paddingHorizontal: Utils.pixel * 60,
    paddingVertical: Utils.fontRem * 1,
  },
  h_l: {
    justifyContent: 'center',
    marginRight:Utils.pixel * 30,
  },
  h_l_Img:{
    width: Utils.pixel * 150,
    height: Utils.pixel * 150,
  },
  h_c: {
    flex: 1,
    flexDirection: 'column',
  },
  h_c_t: {
    flex: 1,
    fontSize: Utils.fontRem * 1.3,
    color: '#fff',
  },
  h_c_s: {
    flex: 1,
    width: Utils.fontRem * 4,
  },
  h_c_s_t: {
    fontSize: Utils.fontRem * 1,
    height: Utils.fontRem * 1.2,
    lineHeight:Utils.fontRem * 1.2,
    borderRadius: Utils.fontRem * 1,
    backgroundColor: '#e3a741',
    color: '#fff',
    textAlign: 'center',
  },
	h_r:{
    justifyContent: 'center',
	},
  h_r_Img:{
    width: Utils.pixel * 36,
    height: Utils.pixel * 36,
  },
})

export default MHeader
