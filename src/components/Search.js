/**
 * Weather App
 * Build with react-native
 * @search-weather
 */

import React, { Component } from 'react'
import { StyleSheet, TextInput, Text, View, Button, TouchableHighlight } from 'react-native'
import Result from './Result'
import Error from './Error'

export default class Search extends Component {
	constructor(props) {
		super(props)

		this.state = { pressStatus: false }
	}
	onHideUnderlay(){
		this.setState({ pressStatus: false })
	}
	onShowUnderlay(){
		this.setState({ pressStatus: true })
	}
	goToInfoPage() {
		this.props.navigator.replace({
			id: 'Info',
		})
	}

	searchCityWeather() {
		this.props.searchWeather(this.props.text)
	}

	render() {
		const {text, result, error, disabled} = this.props

		return (
			<View style={styles.container}>
				<View style={styles.searchTitleContainer}>
					<Text style={styles.searchTitle}>Search you city</Text>
				</View>
				<TextInput
					style={styles.searchInput}
					onChangeText={(value) => this.props.changeText({value})}
					placeholder='Search your city weather'
					value={text}
				/>
				{result ? <Result result={result}/> : null }
				{error ? <Error error={error} /> : null	}
				<View style={styles.buttonContainer}>
					<TouchableHighlight
						activeOpacity={1}
						onHideUnderlay={this.onHideUnderlay.bind(this)}
						onShowUnderlay={this.onShowUnderlay.bind(this)}
						onPress={this.searchCityWeather.bind(this)}
						style={ this.state.pressStatus ? styles.buttonPress : styles.button }
					>
						<Text style={styles.search}>Search Weather</Text>
					</TouchableHighlight>
				</View>
				<View style={styles.buttonContainer}>
					<Button title="Info Page" color="#841584" onPress={this.goToInfoPage.bind(this)}/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 15
	},
	buttonContainer: {
		marginTop: 10
	},
	searchTitleContainer: {
		marginTop: 20,
		marginBottom: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	searchTitle: {
		fontSize: 18
	},
	searchInput: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1
	},
	search: {
		textAlign: 'center',
		margin: 10,
		color: '#fff'
	},
	button: {
		borderColor: '#204',
		backgroundColor: '#204',
	},
	buttonPress: {
		borderColor: '#206',
		backgroundColor: '#206',
	},
})