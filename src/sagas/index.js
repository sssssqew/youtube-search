import { all } from 'redux-saga/effects';
import { searchSaga } from './searchSaga';
import { selectSaga } from './selectSaga';

export default function* rootSaga() {
  yield all([
    searchSaga(),
    selectSaga(),
  ]);
}