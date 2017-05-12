/**
 * Weather App
 * Build with react-native
 * @app
 */

import { StackNavigator } from 'react-navigation'
import SearchPage from './containers/SearchPage'
import InfoPage from './containers/InfoPage'

const Router = StackNavigator({
		SearchPage: {screen: SearchPage},
		InfoPage: {screen: InfoPage}
	}, {
		initialRouteName: 'InfoPage'
	}
)

export default Router