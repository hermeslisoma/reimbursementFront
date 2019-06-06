import { put, call } from 'redux-saga/effects';

import * as types from '../actions/all.type.actions';
import { UserService } from '../services/user.service';

export function* getUserListSaga() {
  let userService = new UserService();
  try {
    const response = yield call(userService.GetAllUsers);
    console.log(response)
    yield put({ type: types.GET_LIST_USERS_SUCCESS, response }) ;

  } catch(error) {
    yield put({ type: types.SET_MESSAGE, error });
  }
}
export function* updateUserSaga(payload:any){
  let userService = new UserService();
  console.log('this is the payload for the update:',payload.id,payload.user);
  
  try {
    const response = yield call(userService.Update,payload.id,payload.user);
    console.log(response)
    yield put({ type: types.UPDATE_USER_SUCCESS, response }) ;

  } catch(error) {
    console.log(error)
    yield put({ type: types.SET_MESSAGE, error });
  }

}
export function* deleteUserSaga(payload:any){
  let userService = new UserService();
  console.log('this is the payload for the delete:',payload.id);
  
  try {
    const response = yield call(userService.Delete,payload.id);
    console.log(response)
    yield put({ type: types.DELETE_USER_SUCCESS, response }) ;

  } catch(error) {
    console.log(error)
    yield put({ type: types.SET_MESSAGE, error });
  }

}
