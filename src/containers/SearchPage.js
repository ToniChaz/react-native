import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import searchWeatherActions from '../actions/searchWeather'

import Search from '../components/Search'

export function mapStateToProps (state) {
	return {...state.searchWeatherState}
}

export function mapDispatchToProps (dispatch) {
	return bindActionCreators(searchWeatherActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)