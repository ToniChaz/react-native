import searchWeatherAction from '../constants/actions/searchWeather'

function initialState() {
	return {
		text: '',
		result: null,
		error: null,
		disabled: false
	}
}

function changeText(state, {text}) {
	return {
		...state,
		text: text.value,
	}
}

function searchWeather(state) {
	return {
		...state,
		text:'',
		result: null,
		error: null,
		disabled: true
	}
}

function searchWeatherSuccess(state, {results}) {
	return {
		...state,
		result: results,
		error: null,
		disabled: false
	}
}

function searchWeatherError(state, {error}) {
	return {
		...state,
		result: null,
		error: error,
		disabled: false
	}
}

export default function (state = initialState(), action) {
	switch (action.type) {
		case searchWeatherAction.ON_CHANGE_TEXT:
			return changeText(state, action)
		case searchWeatherAction.SEARCH_WEATHER:
			return searchWeather(state, action)
		case searchWeatherAction.SEARCH_WEATHER_SUCCESS:
			return searchWeatherSuccess(state, action)
		case searchWeatherAction.SEARCH_WEATHER_ERROR:
			return searchWeatherError(state, action)
		default:
			return state
	}
}