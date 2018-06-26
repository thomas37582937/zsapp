import React, { Component } from 'react'
import { Image, Text, View, StyleSheet, Alert, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { Button, LoginTextField } from './components/'

class Login extends Component {
  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }
  sendFn = () => {
    fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      body:"key1=value&key2=value…&keyN=value"
    })
    .then((response) => {       // 数据解析方式
    })
    .then((responseData) => {       // 获取到的数据处理
    })
    .catch((error) => { // 错误处理
    })
    .done();
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.contentContainer}>
        <View style={styles.container}>
          <View style={{ alignItems: 'center', marginTop: 68 }}>
            <Image style={{ width: 100, height: 100 }} source={require('./images/logo.png')} />
            <Text style={{ fontSize: 17, color: '#ffffff' }}>WELCOME</Text>
          </View>
          <View style={styles.inputBackgroundView}>
            <LoginTextField
              style={{ top: 20, marginRight: 17, marginLeft: 17 }}
              imageSource={require('./images/loginPhone.png')}
              placeholder="输入手机号"
            />
            <LoginTextField
              style={{ top: 20, marginRight: 17, marginLeft: 17 }}
              imageSource={require('./images/loginPassword.png')}
              placeholder="输入密码"
            />
            <Button
              textStyle={{ textAlign: 'center', fontSize: 14, color: '#fff' }}
              style={{
                top: 40,
                marginRight: 17,
                marginLeft: 17,
                borderRadius: 22,
                height: 44,
                justifyContent: 'center',
                backgroundColor: '#e3a741',
              }}
              onPress={()=>navigate('Index')}
              title={'登录'}
            />

            <View style={{ top: 40, alignItems: 'center', backgroundColor: '#fff', flexDirection: 'row', height: 50 }}>
              <Button
                textStyle={{ marginLeft: 20, textAlign: 'center', fontSize: 14, color: '#999' }}
                style={{ flex: 1, alignItems: 'flex-start', top: 5, height: 44, backgroundColor: '#fff' }}
                title={'注册账号'}
              />
              <Button
                textStyle={{ marginRight: 20, textAlign: 'center', fontSize: 14, color: '#999' }}
                style={{ flex: 1, alignItems: 'flex-end', top: 5, height: 44, backgroundColor: '#fff' }}
                title={'忘记密码？'}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 40, marginRight: 40, alignItems: 'center', top: 70 }}>
            <View style={{ height: 1, backgroundColor: '#ffffff', marginRight: 26, marginLeft: 0, flex: 1 }} />
            <Text style={{ fontSize: 15, color: '#ffffff' }}>快速登录</Text>
            <View style={{ height: 1, backgroundColor: '#ffffff', marginLeft: 26, marginRight: 0, flex: 1 }} />
          </View>
          <View style={{ alignItems: 'center', top: 50 + 13 + 20 }}>
            <Button imageSource={require('./images/weChatLogin.png')} imageStyle={{ width: 37, height: 37 }} />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 680,
    backgroundColor: '#e3a741',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#e3a741',
  },
  inputBackgroundView: {
    marginLeft: 30,
    marginRight: 30,
    height: 270,
    top: 20,
    borderRadius: 13,
    backgroundColor: '#ffffff',
    shadowColor: '#c47e05',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 13,
  },
})

export default Login
