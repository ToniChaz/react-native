import { call, put, takeEvery } from 'redux-saga/effects'
import fetchWeatherService from '../services/fetchWeather'
import searchWeatherActions from '../actions/searchWeather'
import searchWeatherActionsTypes from '../constants/actions/searchWeather'

export function * getWeather({query}) {

	try {
		const results = yield call(fetchWeatherService, query)

		yield put(searchWeatherActions.searchWeatherSuccess(results))

	} catch (error) {
		yield put(searchWeatherActions.searchWeatherError(error))
	}
}

export function * watchGetWeather() {
	yield takeEvery(searchWeatherActionsTypes.SEARCH_WEATHER, getWeather)
}