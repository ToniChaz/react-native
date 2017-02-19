/**
 * Weather App
 * Build with react-native
 * @search-weather
 */

import React, { Component } from 'react'
import { StyleSheet, TextInput, Text, View, Button } from 'react-native'
import fetchWeather from '../services/fetchWeather'

export default class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: 'Search your city weather',
			result: null,
			error: null,
			disabled: false
		}
	}

	onInputBlur() {
		if (this.state.text === '') {
			this.setState({text: 'Search your city weather'})
		}
	}

	goToInfoPage() {
		this.props.navigator.replace({
			id: 'Info',
		})
	}

	searchCityWeather() {

		this.setState({disabled: true})
		this.setState({result: null})
		this.setState({error: null})

		fetchWeather(this.state.text)
			.then((result) => {
				this.setState({result})
				this.setState({disabled: false})
			})
			.catch((error)=>{
				this.setState({error})
				this.setState({disabled: false})
			})
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.searchTitleContainer}>
					<Text style={styles.searchTitle}>Search you city</Text>
				</View>
				<TextInput
					style={styles.searchInput}
					onChangeText={(text) => this.setState({text})}
					onBlur={this.onInputBlur.bind(this)}
					onFocus={()=>this.setState({text:''})}
					value={this.state.text}
				/>
				{this.state.result ?
					<View style={styles.resultTextView}>
						<Text style={styles.resultText}>{this.state.result.name}: {this.state.result.main.temp}Cº</Text>
						<Text style={styles.resultText}>Humidity: {this.state.result.main.humidity}%</Text>
						<Text style={styles.resultText}>Pressure: {this.state.result.main.pressure}hPa</Text>
					</View>
					: null
				}
				{this.state.error ?
					<View style={styles.errorTextView}>
						<Text style={styles.errorText}>{this.state.error.message}</Text>
					</View>
					: null
				}
				<View style={styles.buttonContainer}>
					<Button disabled={this.state.disabled} style={styles.searchButtons} title="Search Weather" color="#204" onPress={this.searchCityWeather.bind(this)}/>
				</View>
				<View style={styles.buttonContainer}>
					<Button style={styles.searchButtons} title="Info Page" color="#841584" onPress={this.goToInfoPage.bind(this)}/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 15
	},
	resultTextView: {
		margin: 15
	},
	resultText: {
		fontSize: 15
	},
	searchTitleContainer: {
		marginTop:20,
		marginBottom:10,
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
	buttonContainer: {
		marginTop: 15
	},
	errorText:{
		color: '#FF0000'
	},
	errorTextView: {
		marginTop:20,
		marginBottom:10,
		justifyContent: 'center',
		alignItems: 'center'
	}
})