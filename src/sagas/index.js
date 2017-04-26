import { fork } from 'redux-saga/effects'
import * as searchWeatherSagas from './searchWeather'

export default function * root () {
  yield [
    fork(searchWeatherSagas.watchGetWeather)
  ]
}


