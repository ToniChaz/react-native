/**
 * Weather App
 * Build with react-native
 * @search-weather
 */

import React, { Component } from 'react'
import { Animated, StyleSheet, Text, View, Easing } from 'react-native'

export default class Splash extends Component {
	constructor(props) {
		super(props)
		this.spinValue = new Animated.Value(0)
	}

	componentDidMount() {
		this.spin()
		setTimeout(() => {
			this.props.navigator.replace({
				id: 'Info',
			})
		}, 2000)
	}

	spin() {
		this.spinValue.setValue(0)
		Animated.timing(
			this.spinValue,
			{
				toValue: 1,
				duration: 4000,
				easing: Easing.linear
			}
		).start(() => this.spin())
	}

	render() {
		const spin = this.spinValue.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '360deg']
		})
		return (
			<View style={styles.splashContainer}>
				<Animated.Image
					style={{
          width: 125,
          height: 110,
          transform: [{rotate: spin}] }}
					source={require('../images/react-js.png')}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	splashContainer: {
		flex: 1,
		backgroundColor: '#204',
		justifyContent: 'center',
		alignItems: 'center',
	}
})