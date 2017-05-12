/**
 * Weather App
 * Build with react-native
 * @search-weather
 */

import React, { Component } from 'react'
import { StyleSheet, TextInput, Text, View, Button, TouchableHighlight, Keyboard } from 'react-native'
import Result from './Result'
import Error from './Error'

class Search extends Component {
	static navigationOptions = {
		title: 'Welcome to Search Weather'
	}

	constructor(props) {
		super(props)

		this.state = {pressStatus: false}
	}

	onHideUnderlay() {
		this.setState({pressStatus: false})
	}

	onShowUnderlay() {
		this.setState({pressStatus: true})
	}

	searchCityWeather() {
		Keyboard.dismiss()
		this.props.searchWeather(this.props.text)
	}

	render() {
		const {text, result, error, disabled, navigation: {navigate}} = this.props

		return (
			<View style={styles.container}>
				<View style={styles.searchTitleContainer}>
					<Text style={styles.searchTitle} accessibilityLabel={'Search you city'}>Search you city</Text>
				</View>
				<TextInput
					style={styles.searchInput}
					onChangeText={(value) => this.props.changeText({value})}
					placeholder='Search your city weather'
					value={text}
				/>
				{result ? <Result result={result}/> : null }
				{error ? <Error error={error}/> : null    }
				<View style={styles.buttonContainer}>
					<TouchableHighlight
						disabled={disabled}
						activeOpacity={1}
						onHideUnderlay={this.onHideUnderlay.bind(this)}
						onShowUnderlay={this.onShowUnderlay.bind(this)}
						onPress={this.searchCityWeather.bind(this)}
						style={ this.state.disabled ? styles.buttonDisabled : this.state.pressStatus ? styles.buttonPress : styles.button }
					>
						<Text style={styles.search}>Search Weather</Text>
					</TouchableHighlight>
				</View>
				<View style={styles.buttonContainer}>
					<Button title="Information" color="#841584" onPress={() => navigate('InfoPage') }/>
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
		backgroundColor: '#204'
	},
	buttonPress: {
		borderColor: '#373496',
		backgroundColor: '#373496'
	},
	buttonDisabled:{
		borderColor: '#9c9c9c',
		backgroundColor: '#9c9c9c'
	}
})

export default Search