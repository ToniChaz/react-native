/**
 * Weather App
 * Build with react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import App from './src/App'

export default class WeatherApp extends Component {
	render(){
		return <App/>
	}
}

AppRegistry.registerComponent('WeatherApp', () => WeatherApp)




