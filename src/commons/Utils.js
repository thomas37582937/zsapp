import { Dimensions, Platform, PixelRatio } from 'react-native'

// 设备宽高
export const { width, height } = Dimensions.get('window')
// 单位像素
export const pixel = 1 / PixelRatio.get()
// 当前平台
export const { OS } = Platform
// 字体基准值
export const fontRem = (width / 320) * 16
