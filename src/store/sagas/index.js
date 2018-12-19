import { all, takeLatest, takeEvery } from 'redux-saga/effects';
import * as identity from './identity';
import * as actionTypes from '../types';

export function* rootSaga() {
  yield all([
    yield takeLatest(actionTypes.SET_IDENTITY_FLOW, identity.identityWorker)
  ]);
}
