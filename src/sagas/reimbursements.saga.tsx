import { put, call } from 'redux-saga/effects';

import * as types from '../actions/all.type.actions';
import { ReimbursementService } from '../services/reimbursements.service';

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