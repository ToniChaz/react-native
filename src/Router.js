/**
 * Weather App
 * Build with react-native
 * @app
 */

import React, { Component } from 'react'
import { Navigator } from 'react-native'
import Splash from './Splash'
import SearchPage from './containers/SearchPage'
import InfoPage from './containers/InfoPage'

export default class Router extends Component {
	configureScene(route){
		if (route.sceneConfig) {
			return route.sceneConfig
		}
		return Navigator.SceneConfigs.FloatFromRight
	}

	render() {
		return (
			<Navigator
				initialRoute={{id: 'Splash'}}
				renderScene={this.renderScene.bind(this)}
				configureScene={(route) => this.configureScene(route)}/>
		)
	}

	renderScene(route, navigator) {
		if (route.id === 'Splash') {
			return <Splash navigator={navigator}/>
		}
		if (route.id === 'Info') {
			return <InfoPage navigator={navigator}/>
		}
		if (route.id === 'Search') {
			return <SearchPage navigator={navigator}/>
		}
	}
}