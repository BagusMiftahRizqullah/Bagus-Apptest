import {all} from 'redux-saga/effects';
import HomeSaga from '../Sagas/HomeSaga'

export function* SagaWacther() {
  yield all([
    HomeSaga(),
  ]);
}