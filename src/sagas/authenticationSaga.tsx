import { put, call } from 'redux-saga/effects';

import * as types from '../actions/all.type.actions';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authenticationService';

export function* loginSaga(payload:any) {

  let authenticationService = new AuthenticationService();
  try {
    const response = yield call(authenticationService.Authenticate, payload.user.username,payload.user.password);
    yield [
      put({ type: types.LOGIN_USER_SUCCESS, response })
    ];
  } catch(error) {
    const response = error.response.data
    yield put({ type: types.LOGIN_USER_ERROR , response })
  }
} 