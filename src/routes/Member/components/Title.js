import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Utils } from '../../../commons'

const Title = ({ icon, name, right, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.left}>
      {icon ? (
        <View style={styles.iconbox}>
          <Image style={[styles.icon]} resizeMode="contain" source={icon} />
        </View>
      ) : null}
      {icon ? (
        <Text style={styles.text}>{name}</Text>
      ) : (
        <Text style={[styles.text, { fontWeight: 'bold' }]}>{name}</Text>
      )}
    </View>
    {right ? (
      <View style={styles.right}>
        <Image style={styles.img} resizeMode="contain" source={require('../images/right.png')} />
      </View>
    ) : null}
  </TouchableOpacity>
)

Title.propTypes = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: Utils.fontRem * 1.2,
    paddingVertical: Utils.fontRem * 0.8,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: Utils.pixel * 3,
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconbox: {
    marginRight: Utils.fontRem * 1,
  },
  icon: {
    width: Utils.fontRem * 1.5,
    height: Utils.fontRem * 1.5,
  },
  text: {
    fontSize: Utils.fontRem,
    color: '#212121',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    marginLeft: Utils.pixel * 5,
    width: Utils.fontRem * 0.8,
    height: Utils.fontRem * 0.8,
  },
})

export default Title
