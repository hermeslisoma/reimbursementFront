import { put, call } from 'redux-saga/effects';

import * as types from '../actions/all.type.actions';
import { ReimbursementService } from '../services/reimbursements.service';

export function* getReimbursementsByUserSaga(payload:any){
  let reimbursementService = new ReimbursementService();
  try {
    const response = yield call(reimbursementService.getReimbursementsByStatus, payload.statusId);
    console.log('reducerReimbursement by status response:',response)
    yield [
      put({ type: types.GET_REIMBURSEMENTS_BY_STATUS_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.SET_MESSAGE, error });
  }
}
export function* reimbursementByIdSaga(payload:any) {
  
    let reimbursementService = new ReimbursementService();
    try {
      const response = yield call(reimbursementService.getReimbursements, payload.id);
      console.log('reducerReimbursement response:',response)
      yield [
        put({ type: types.GET_REIMBURSEMENTS_BY_ID_SUCCESS, response })
      ];
    } catch(error) {
      yield put({ type: types.SET_MESSAGE, error });
    }
}
export function* addReimbursementSaga(payload:any){
  let reimbursementService = new ReimbursementService();
    try {
      console.log('PAYLOADDDDDD::::',payload.payload)
      const response = yield call(reimbursementService.Add, payload.payload);
      console.log('addReimbursement response:',response)
      yield [
        put({ type: types.ADD_REIMBURSEMENT_SUCCESS, response })
      ];
    } catch(error) {
      yield put({ type: types.SET_MESSAGE, error });
    }
}
export function* updateReimbursementStatusSaga(payload:any){
  let reimbursementService = new ReimbursementService();
    try {
      console.log('PAYLOADDDDDD::::',payload.reimbursement)
      const response = yield call(reimbursementService.updateReimbursmentStatus, payload.reimbursement);
      console.log('addReimbursement response:',response)
      yield [
        put({ type: types.UPDATE_REIMBURSEMENT_SUCSESS, response })
      ];
    } catch(error) {
      yield put({ type: types.SET_MESSAGE, error });
    }
}
export function* reimbursementByPageSaga(payload:any){
  let reimbursementService = new ReimbursementService();
    try {
      console.log('PAYLOADDDDDD::::',)
      const response = yield call(reimbursementService.getReimbursmentByPage,payload.page);
      console.log('get by page response:',response)
      yield [
        put({ type: types.GET_REIMBURSEMENTS_BY_PAGE_SUCCESS, response })
      ];
    } catch(error) {
      yield put({ type: types.SET_MESSAGE, error });
    }
}