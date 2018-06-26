import React,{Component} from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
import { TabNavigator , createBottomTabNavigator,TabBarBottom } from 'react-navigation';
import { TabView,Overlay } from 'teaset'
import PropTypes from 'prop-types'
import { Utils } from '../../../commons'

class CustomTabBar extends Component{
	static propTypes = {

	}

	constructor(props) {
		super(props)
		console.log(props)
		this.state = {
		}
	}
	_AddTabBarOnPress = () => {
    const overlayView = (
      <Overlay.PullView side="bottom" animated ref={v => (this.overlayPullView = v)}>
        <View style={{ height: 400, backgroundColor: '#fff' }} />
      </Overlay.PullView>
    )
    Overlay.show(overlayView)
  }
  render(){
		const { navigation } = this.props
		let routes = navigation.state.routes
		return(
		<TouchableOpacity style={styles.v}>
			{routes.map((item,i)=>
			(<Text style={styles.t} onPress={({routeName = item.routeName})=>navigation.navigate(routeName)}>{item.key}</Text>)
			)}
			<Text style={styles.t} onPress={()=>this._AddTabBarOnPress()}>Add</Text>
		</TouchableOpacity>
		)
  }
}

CustomTabBar.propTypes = {
}

const styles = StyleSheet.create({
	v:{
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height:Utils.fontRem * 2,
		width:Utils.width,
		backgroundColor:'#aaa',
	},
	t:{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height:Utils.fontRem * 2,
		backgroundColor:'#ccc',
	},
})

export default CustomTabBar
