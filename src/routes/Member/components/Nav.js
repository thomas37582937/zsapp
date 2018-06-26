import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Badge } from 'teaset'
import { Utils } from '../../../commons'
import { right, back, head } from '../images'
const Nav = ({ icon, name, index, badge, length }) => (
  <View style={styles.container}>
    <View style={styles.view}>
      <Image style={styles.img} resizeMode="contain" source={icon} />
      {badge ?
        <Badge style={styles.badge} countStyle={{fontSize:Utils.fontRem * 1}} type="capsule" count={badge} />
        : null
      }
    </View>
    <Text style={styles.text}>{name}</Text>
  </View>
)

Nav.propTypes = {
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Utils.fontRem * 2,
  },
  view:{
    flex: 1,
    width: Utils.fontRem * 2,
    height: Utils.fontRem * 2,
  },
  img: {
    flex: 1,
    width: Utils.fontRem * 2,
    height: Utils.fontRem * 2,
  },
  text: {
    flex: 1,
    color: "#666",
    fontSize: Utils.fontRem * 1,
  },
  badge: {
    position: 'absolute',
    right: -Utils.fontRem * 0.8,
    top: -Utils.fontRem * 0.8,
    width: Utils.fontRem * 1.6,
    height: Utils.fontRem * 1.6,
    borderRadius: Utils.fontRem * 1.6,
  },
})

export default Nav
