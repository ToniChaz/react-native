/**
 * Weather App
 * Build with react-native
 * @app
 * Ctrl+m
 * http://localhost:8081/debugger-ui to debug
 */

import React, { Component } from 'react'
import { View } from 'react-native'
import Router from './Router'

export default class App extends Component {
	render() {
		return <Router/>
	}
}