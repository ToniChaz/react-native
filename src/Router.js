/**
 * Weather App
 * Build with react-native
 * @app
 */

import { StackNavigator } from 'react-navigation'
//import Splash from './Splash'
import SearchPage from './containers/SearchPage'
import InfoPage from './containers/InfoPage'

const Router = StackNavigator({
	  //Splash: {screen: Splash},
		SearchPage: {screen: SearchPage},
		InfoPage: {screen: InfoPage}
	}, {
		initialRouteName: 'InfoPage'
	}
)

export default Router