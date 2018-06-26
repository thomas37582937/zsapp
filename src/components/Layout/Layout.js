import React, { Component } from 'react'
import { StyleSheet, StatusBar, KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Utils } from '../../commons'
import { request } from '../../commons'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { children, ...other } = this.props
    return (
      <KeyboardAvoidingView
        style={styles.layout}
        behavior="padding"
        keyboardVerticalOffset={Utils.OS === 'ios' ? 0 : -Utils.height / 3}
      >
        <StatusBar animated barStyle="light-content" />
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            ...other,request
          }),
        )}
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    width: Utils.width,
    height: Utils.height,
  },
  loader: {
    backgroundColor: 'transparent',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default connect(state => state)(Layout)
