/**
 * Weather App
 * Build with react-native
 * @app
 * Ctrl+m
 * http://localhost:8081/debugger-ui to debug
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Router from './Router'

const store = configureStore()

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router/>
			</Provider>
		)
	}
}