/**
 * Weather App
 * Build with react-native
 * @error-weather
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Error extends Component {

	render() {
		const {error} = this.props

		return (
			<View style={styles.errorTextView}>
				<Text style={styles.errorText}>{error.message}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	errorText: {
		color: '#FF0000'
	},
	errorTextView: {
		marginTop: 20,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center'
	}
})