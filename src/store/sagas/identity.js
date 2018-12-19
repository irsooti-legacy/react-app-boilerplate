import { put, call } from 'redux-saga/effects';
import * as identity from '../actions/identity';

export function* identityWorker(action) {
  //   yield put(identity.setIdentity({}));
  //   try {
  //     let response = yield call(someapiservice);
  //     if (response.error_status) {
  //       throw new Error(response.error_status);
  //     }
  //     } else {
  //       yield put(identity.logoutFlow());
  //       throw new Error('Abbiamo disabilitato gli account non Aesys!');
  //     }
  //     console.log(response);
  //   } catch (err) {
  //     yield put(auth.authenticationFail(err.message));
  //   } finally {
  //     yield put(auth.setAuthenticationStatus(false));
  //   }
}
