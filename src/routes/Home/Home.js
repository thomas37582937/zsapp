import React, { Component } from 'react'
import { StyleSheet, View, Text ,Image,TouchableOpacity,ScrollView,FlatList,AsyncStorage } from 'react-native'
import { Theme,BasePage,Input,Button,NavigationBar,Carousel } from 'teaset'
import { createStore } from 'redux'
import User from '../../reducers'
import PropTypes from 'prop-types'
import { Utils } from '../../commons'
import { Head,Space,Title } from '../../components'
import { AcrossCard,AcrossPic,AcrossShare } from './components'
import {
  homeHeadButton0,
  homeHeadButton1,
  homeHeadButton2,
  homeHeadButton3
} from './images'

const menuList = [
  { title: '约人参会', image: homeHeadButton0, navigate:'Meet_0' },
  { title: '约场演讲', image: homeHeadButton1, navigate:'Meet_1' },
  { title: '导师预约', image: homeHeadButton2, navigate:'Meet_2' },
  { title: '项目分享', image: homeHeadButton3, navigate:'Meet_3' },
]
const ListBox = [
  {title:'今日百度排行',detail:'南京别墅三折拍卖',leader:'吴帝聪'},
  {title:'今日百度排行',detail:'借14万到手4万',leader:'吴帝聪'},
  {title:'今日百度排行',detail:'赵薇王俊凯逛菜场',leader:'吴帝聪'},
  {title:'今日百度排行',detail:'火星发现有机分子',leader:'吴帝聪'},
  {title:'今日百度排行',detail:'英少年被亲妈饿死',leader:'吴帝聪'},
  {title:'今日百度排行',detail:'谢娜马甲线flag',leader:'吴帝聪'}
]
class Home extends Component {
  static propTypes = {}
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  //适合改变State
  componentWillMount() {
    const store = createStore(User)
    const state = store.getState();
    const URL = state.Common.URL;
    let access_token = '';
    if(!access_token){
      access_token = 'a0b92ad7bf9361827729477de1f6c388';
      store.dispatch(this._addTodo(access_token));
    }
    this.setState({
      URL,access_token
    })
  }
  //适合放网络资源
  componentDidMount(){
    const { request } = this.props
    console.log(request)
    request('http://192.168.1.219:8002/public/index.php/api/common/login', {
      access_token: 'e80541655ecaef8c4d685a219f491d0b',
      mobile: '15692411159',
      password: '123456',
      device_token: '111',
      platform: '1',
      version: '111',
    }).then(result => {
      alert(JSON.stringify(result))
    })
    // this._onRegister()
  }

  _addTodo = (text) => {
    return {
      type:'TOKEN',
      access_token:text
    }
  }
  _onRegister(){
    let { URL,access_token } = this.state;
    console.log(URL,access_token)
    fetch(URL + 'combination/index', {
       //请求类型 
       method: 'POST',      
       //请求header
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       // 发送请求参数
       body: JSON.stringify({
        access_token: access_token    
       })
     }).then((response) => response.json())
       .then((jsonData) => {
         console.log(jsonData)
         // 回写数据
         this.setState({
          data : jsonData.data
         });
       })
       .catch((error) => {
          this.setState({
           text : '获取服务器数据错误'
         });
       });
 }
  _extraUniqueKey(item ,index){
    return "index"+index+item;
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.sv}>
          <Carousel style={styles.Carousel} control={true} interval={6000} >
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528373402718&di=dc0667fb38462a5f2ab048d2d23901c0&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F763293ce06bf1e684ef0ea3da43ae5008d8564b8.jpg'}}
              />
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528373424358&di=fd2e0e354a1ba0e7b27dcd66b9f3015f&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D2819933620%2C2510966712%26fm%3D214%26gp%3D0.jpg'}}
              />
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528373445040&di=cd9a2add40a961893a9b570c48ca9c43&imgtype=0&src=http%3A%2F%2Fwapfile.desktx.com%2Fpc%2F160914%2Fbigpic%2Fzjgcsfj1920x12005953.jpg'}}
              />
          </Carousel>
          <Head style={styles.head} location={'广州'} leftOnPress={()=>alert('1')} placeholder={'搜索课程'} rightOnPress={()=>alert('2')}/>
          <View style={styles.menu}>
            {menuList.map((item,index)=>(
              <TouchableOpacity style={styles.menuBox} key={index} onPress={() => navigate(item.navigate)}>
                <Image source={item.image} style={styles.menuImg} />
                <Text style={styles.menuText}>{item.title}</Text> 
              </TouchableOpacity>
            ))}
          </View>
          <Space size={0.8}/>
          <Title name={'会议报名'} right={'全部'} onPress={()=>alert('3')}/>
          <View style={styles.ListBox}>
            <FlatList
              keyExtractor = {this._extraUniqueKey}    
              horizontal
              data={ListBox}
              renderItem={({item,index})=>(
                <AcrossCard 
                  key = {index}
                  {...item}
                  button = '我要报名'
                />
              )}
            />
          </View>
          <Title name={'演讲时间竞购'} right={'全部'} onPress={()=>alert('4')}/>
          <View style={styles.ListBox}>
            <FlatList
              keyExtractor = {this._extraUniqueKey}    
              horizontal
              data={ListBox}
              renderItem={({item,index})=>(
                <AcrossCard 
                  key = {index}
                  {...item}
                  button = '立即抢购'
                />
              )}
            />
          </View>
          <Space size={0.8}/>
          <Title name={'导师'}/>
          <View style={styles.ListBox}>
            <FlatList
              keyExtractor = {this._extraUniqueKey}    
              horizontal
              data={ListBox}
              renderItem={({item,index})=>(
                <AcrossPic 
                  length = {ListBox.length}
                  key = {index}
                  {...item}
                />
              )}
            />
          </View>
          <Space size={0.8}/>
          <Title name={'今日推荐'}/>
          <View style={styles.ListBox}>
            <FlatList
              keyExtractor = {this._extraUniqueKey}    
              data={ListBox}
              renderItem={({item,index})=>(
                <AcrossShare 
                  key = {index}
                  {...item}
                  button = '立即抢单'
                  money = '1000'
                />
              )}
            />
          </View>
          <Space size={1}/>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sv:{
    flex: 1,
  },
  Carousel:{
    height: Utils.fontRem * 12,
  },
  image: {
    width:Utils.width,
    height: Utils.fontRem * 12,
  },
  head:{
    position: 'absolute',
    left:0,
    top: Utils.fontRem * 0.5,
  },
  menu:{
    backgroundColor:'#fff',
    flexDirection: 'row',
  },
  menuBox:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Utils.fontRem * 1,
  },
  menuImg:{
    width:Utils.fontRem * 2,
    height:Utils.fontRem * 2,
  },
  menuText:{
    fontSize: Utils.fontRem * 0.8,
  },
  ListBox:{
    backgroundColor:"#fff",
  },
})

export default Home
