import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { Utils } from '../../commons'

const Space = ({ size, color }) => 
	<View style={{ height: Utils.pixel * 32 * (size || 1), backgroundColor: color || '#F5F5F5' }} />

Space.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string,
}

export default Space
