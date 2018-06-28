import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Text, Image, TouchableWithoutFeedback, TouchableOpacity, ScrollView, Keyboard } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'
import Picker from 'react-native-picker'
import ActionSheet from 'react-native-actionsheet'
import ImagePicker from 'react-native-image-crop-picker'
import { Actions } from 'react-native-router-flux'
import { Utils } from '../../../Commons'
import { AddPic } from '../../../Assets'

const IconRight = () => <Icon name="ios-arrow-forward" size={Utils.fontRem} color={'#E5E5E5'} style={{ marginLeft: Utils.fontRem / 2 }} />

export default class InputRow extends Component {
	static propTypes ={
		title: PropTypes.string,
		type: PropTypes.string.isRequired,
		style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
		titleStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
		onChange: PropTypes.func.isRequired,
	}

	static defaultProps = {
		editable: true,
		keyboardType: 'default',
		type: 'string',
		secureTextEntry: false,
		multiline: false,
		onChange: () => {},
		dataSource: [],
	}
	
	constructor(props) {
		super(props)
		this.state = {
			value: '',
			selectedIndex: 0,
			images: [],
		}
	}

	render() {
		const { title, style, titleStyle, type } = this.props
		return (
			<View style={[styles.container, { flexDirection: ['upload'].includes(type) ? 'column' : 'row' }, style]}>
				{title ?
					<View style={styles.title}>
						<Text style={[styles.titleText, titleStyle]}>{title}</Text>
					</View> : null }
				<View style={title ? styles.input : { flex: 1 }}>
					{this.renderSon(this.props)}
				</View>
			</View>
		)
	}

	renderSon({ type, name, title, dataSource, keyboardType, textInputStyle, placeholder, multiline, editable, secureTextEntry, defaultValue, maxLength, onChange, onPress }) {
		const { value, images, selectedIndex } = this.state
		switch (type) {
		case 'text':
			return (
				<View style={styles.textView}>
					<Text style={styles.text}>{defaultValue}</Text>
				</View>
			)
		case 'radiobox':
			return (
				<View style={styles.options}>
					{dataSource.map((item, i) => 
						<TouchableOpacity key={i} onPress={() => { this.setState({ selectedIndex: i }); onChange(item) }}>
							<View style={[styles.option, { borderColor: i === selectedIndex ? '#0077FF' : '#E5E5E5' }]}>
								<Text style={[styles.optionText, { color: i === selectedIndex ? '#0077FF' : '#E5E5E5' }]}>{item}</Text>
							</View>
						</TouchableOpacity>)}
				</View>
			)
		case 'button':
			return (
				<TouchableWithoutFeedback onPress={() => onPress(val => this.setState({ value: val }))}>
					<View style={styles.select}>
						<Text style={{ color: value || defaultValue ? '#404040' : '#ccc' }}>{value || defaultValue || '请选择'}</Text>
						<IconRight />
					</View>
				</TouchableWithoutFeedback>
			)
		case 'uploads':
			return (
				<View style={styles.uploads}>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						{images.map((item, index) => (
							<TouchableOpacity 
								key={index}
								style={{ marginVertical: 22 }} 
								delayLongPress={600} 
								onPress={() => Actions.imageView({ images, index })} 
								onLongPress={() => {
									this.setState({ imageIndex: index })
									this.deletePictureAction.show()
								}} 
							>
								<Image style={styles.uploadImage} source={{ uri: item }} />
							</TouchableOpacity>			
						))}
						<TouchableOpacity style={{ marginVertical: 22 }} onPress={() => this.pickPictureAction.show()}>
							<Image style={styles.uploadImage} resizeMode="contain" source={AddPic} />
						</TouchableOpacity>
						{
							images.length === 0 ? 
								<View style={styles.uploadText}>
									<Text>添加图片</Text>
									<Text>{'病症图片或者检查图片，方便医生确认'}</Text>
								</View> : null
						}
					</ScrollView>										
					<ActionSheet 
						ref={e => this.pickPictureAction = e} 
						options={['取消', '拍照', '手机相册']}
						cancelButtonIndex={0} 
						onPress={index => this.pickPictureClick(index)}
					/>
					<ActionSheet 
						ref={e => this.deletePictureAction = e} 
						title={'要删除这张照片吗?'}
						options={['取消', '删除']} 
						cancelButtonIndex={0} 
						onPress={index => this.deletePictureClick(index)}
					/>
				</View>
			)
		case 'upload':
			return (
				<TouchableWithoutFeedback onPress={() => this[`${name}sheet`].show()}>
					<View style={styles.upload}>
						{value || defaultValue ? 
							<Image style={styles.hasfile} source={{ uri: value || defaultValue }} resizeMode={'contain'} /> : 
							<View style={styles.noFile}>
								<Icon name="ios-add" size={Utils.width / 10} color={'#ccc'} />
							</View> }
						<ActionSheet ref={e => this[`${name}sheet`] = e} options={['取消', '拍照', '手机相册']} cancelButtonIndex={0} onPress={i => this.photoSelect(i)} />
					</View>
				</TouchableWithoutFeedback>
			)
		case 'select':
			return (
				<TouchableWithoutFeedback onPress={() => this[`${name}sheet`].show()}>
					<View style={styles.select}>
						<Text style={{ color: value || defaultValue ? '#404040' : '#ccc' }}>{value || defaultValue || '请选择'}</Text>
						<IconRight />
						<ActionSheet ref={e => this[`${name}sheet`] = e} options={dataSource} cancelButtonIndex={0} onPress={(i) => {
							if (onChange(i)) this.setState({ value: dataSource[i] })
						}}
						/>
					</View>
				</TouchableWithoutFeedback>
			)
		case 'picker':
			return (
				<TouchableWithoutFeedback onPress={() => {
					Keyboard.dismiss()
					this.openPicker(dataSource, placeholder || `请选择${title}`)
				}}
				>
					<View style={styles.select}>
						<Text style={{ color: value || defaultValue ? '#404040' : '#ccc' }}>{value || defaultValue || '请选择'}</Text>
						<IconRight />
					</View>
				</TouchableWithoutFeedback>
			)
		default:
			return (<TextInput ref={name} 
				underlineColorAndroid="transparent" 
				keyboardType={keyboardType} 
				style={[styles.textInput, textInputStyle]} 
				placeholder={placeholder || `请输入${title}`}
				multiline={multiline} 
				editable={editable} 
				maxLength={maxLength}
				secureTextEntry={secureTextEntry}
				defaultValue={defaultValue} 
				onChangeText={onChange}
			/>)
		}
	}

	openPicker(pickerData, pickerTitleText) {
		Picker.init({
			pickerData,
			pickerTitleText,
			pickerConfirmBtnText: '确定',
			pickerCancelBtnText: '取消',
			pickerTitleColor: [255, 255, 255, 1],
			pickerConfirmBtnColor: [255, 255, 255, 1],
			pickerCancelBtnColor: [255, 255, 255, 1],
			pickerToolBarBg: [0, 119, 255, 1],
			pickerBg: [255, 255, 255, 1],
			onPickerConfirm: (selectedValue) => {
				let selectedStr = selectedValue.join(' ')
				this.setState({ value: selectedStr })
				this.props.onChange(selectedStr)
			},
		})
		Picker.show()
	}

	photoSelect(index) {
		if (index == 0) return 
		ImagePicker[index === 1 ? 'openCamera' : 'openPicker']({
			mediaType: 'photo',
			compressImageQuality: 0.6,
		}).then((res) => {
			this.setState({ value: res.path })
			this.props.onChange(res.path)
		}).catch(() => {})
	}

	pickPictureClick(index) {
		const { onChange } = this.props
		let options = {
			mediaType: 'photo',
			cropping: false,
			multiple: false,
			cropperCircleOverlay: false,
			compressImageQuality: 0.6,
		}
		const images = [...this.state.images]
		// 拍照
		if (index === 1) {
			ImagePicker.openCamera(options).then(({ path }) => {
				images.push(path)
				this.setState({ images })
				onChange(images)
			}).catch(() => {})
		}
		// 图片库
		if (index === 2) {
			ImagePicker.openPicker(options).then(({ path }) => {
				images.push(path)
				this.setState({ images })
				onChange(images)
			}).catch(() => {})
		}
		// 取消
		if (index === 3) return null
	}

	deletePictureClick(index) {
		const { onChange } = this.props
		const { imageIndex } = this.state
		// 删除
		if (index === 1) {
			const images = JSON.parse(JSON.stringify(this.state.images))
			images.splice(imageIndex, 1)
			this.setState({ images })	
			onChange(images)
		}
		// 取消
		if (index === 2) return null	
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		marginBottom: 1,
		paddingHorizontal: Utils.fontRem * 0.77,
	},
	title: {
		flex: 1,
		marginVertical: Utils.fontRem * 1.11,
	},
	titleText: {
	},
	input: {
		flex: 3,
	},
	textInput: {
		flex: 1,
		textAlign: 'right',
		height: '100%',
	},
	select: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	upload: {
		width: Utils.width,
		height: Utils.height / 3.6,
		backgroundColor: '#fff',
		padding: Utils.fontRem,
		paddingTop: 0,
	},
	uploads: {
		flexDirection: 'row',
	},
	uploadImage: {
		width: Utils.width / 6.7,
		height: Utils.width / 6.7,
		marginRight: Utils.fontRem * 0.77,
	},
	uploadText: {
		justifyContent: 'center',
	},
	noFile: {
		flex: 1,
		borderWidth: 1,
		borderStyle: 'dashed',
		borderRadius: Utils.fontRem / 2,
		borderColor: '#ccc',
		justifyContent: 'center',
		alignItems: 'center',
	},
	hasfile: {
		width: Utils.width - Utils.fontRem * 2,
		height: Utils.height / 3.6 - Utils.fontRem,
	},
	options: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	option: {
		marginLeft: Utils.fontRem / 2,
		paddingVertical: Utils.fontRem / 4,
		paddingHorizontal: Utils.fontRem * 0.8,
		borderWidth: Utils.pixel * 2,
		borderRadius: Utils.fontRem,
	},
	optionText: {
		fontSize: Utils.fontRem * 0.7,
	},
	textView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	text: {
		color: '#404040',
	},
})
