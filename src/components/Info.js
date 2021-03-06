/**
 * Weather App
 * Build with react-native
 * @info-weather
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class Info extends Component {
	static navigationOptions = {
		title: 'Info Weather Page'
	}

	render() {
		const {navigate} = this.props.navigation

		return (
			<View style={styles.container}>
				<View style={styles.infoTitleView}>
					<Text style={styles.infoTitle} accessibilityLabel={'The weather station'}>The weather station</Text>
			</View>
				<Text style={styles.infoText}>
					Free weather application to search your city weather.
				</Text>
				<View style={styles.buttonContainer}>
					<Button testID={'searchBtn'} title="Search Your City" color="#841584" onPress={() => navigate('SearchPage') }/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 15
	},
	infoTitleView: {
		marginTop: 20,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	infoText: {
		fontSize: 14
	},
	infoTitle: {
		fontSize: 18
	},
	buttonContainer: {
		marginTop: 30
	}
})
