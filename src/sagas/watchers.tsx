import { takeLatest } from 'redux-saga/effects';
import { loginSaga  } from './authenticationSaga';

import * as types from '../actions/all.type.actions';
import { reimbursementByIdSaga,
         addReimbursementSaga,
         getReimbursementsByUserSaga,
         updateReimbursementStatusSaga,
         reimbursementByPageSaga} from './reimbursements.saga';
import {getUserListSaga,updateUserSaga,deleteUserSaga} from './users.saga'


export default function* watchActions() {
  //login user
  yield takeLatest(types.LOGIN_USER, loginSaga);
  //reimbursements
  yield takeLatest(types.GET_REIMBURSEMENTS_BY_ID,reimbursementByIdSaga);
  yield takeLatest(types.ADD_REIMBURSEMENT,addReimbursementSaga);
  yield takeLatest(types.GET_REIMBURSEMENTS_BY_STATUS,getReimbursementsByUserSaga);
  yield takeLatest(types.UPDATE_REIMBURSEMENT,updateReimbursementStatusSaga)
  yield takeLatest(types.GET_REIMBURSEMENTS_BY_PAGE,reimbursementByPageSaga)
  //users
  yield takeLatest(types.GET_LIST_USERS,getUserListSaga);
  yield takeLatest(types.UPDATE_USER,updateUserSaga);
  yield takeLatest(types.DELETE_USER,deleteUserSaga);
  
}
