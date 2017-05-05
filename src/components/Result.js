/**
 * Weather App
 * Build with react-native
 * @result-weather
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import weatherImages from '../constants/weatherImages'

class Result extends Component {
	degToCompass(num) {
		let val = Math.floor((num / 22.5) + 0.5)
		let arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
		return arr[(val % 16)]
	}

	render() {
		const {result} = this.props

		return (
			<View style={styles.resultTextView}>
				<Text style={styles.resultCity}>{result.name}: {result.main.temp}Cº</Text>
				<Text>Sky {result.weather[0].description}</Text>
				<Image style={styles.resultImage} source={weatherImages[result.weather[0].icon]}/>
				<Text style={styles.resultText}>Humidity: {result.main.humidity}%</Text>
				<Text style={styles.resultText}>Pressure: {result.main.pressure}hPa</Text>
				<Text style={styles.resultText}>Max: {result.main.temp_max}Cº</Text>
				<Text style={styles.resultText}>Min: {result.main.temp_min}Cº</Text>
				<Text style={styles.resultText}>Wind: {result.wind.speed}m/s at {this.degToCompass(result.wind.deg)}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	resultTextView: {
		margin: 15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	resultText: {
		fontSize: 15
	},
	resultCity: {
		fontSize: 20,
		marginBottom: 15
	},
	resultImage: {
		width: 50,
		height: 50
	}
})

export default Result