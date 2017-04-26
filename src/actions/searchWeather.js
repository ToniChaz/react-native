import searchWeatherAction from '../constants/actions/searchWeather'

export default {
	changeText: (text) => ({type: searchWeatherAction.ON_CHANGE_TEXT, text}),
	searchWeather: (query) => ({type: searchWeatherAction.SEARCH_WEATHER, query}),
	searchWeatherSuccess: (results) => ({type: searchWeatherAction.SEARCH_WEATHER_SUCCESS, results}),
	searchWeatherError: (error) => ({type: searchWeatherAction.SEARCH_WEATHER_ERROR, error})
}