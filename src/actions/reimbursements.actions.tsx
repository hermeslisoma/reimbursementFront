import * as types from './all.type.actions';
import { IReimbursement, IReimbursmentUserState } from '../reducers/state.models';


export const getReimbursementsByUser = (id:number) => {
  return {
    type: types.GET_REIMBURSEMENTS_BY_ID,
    id
  }
};
export const addReimbursement = (payload) => {
  return {
    type: types.ADD_REIMBURSEMENT,
    payload
  }
};
export const getReimbursementsByStatus = (statusId:number)=>{
  return {
    type: types.GET_REIMBURSEMENTS_BY_STATUS,
    statusId
  }
};
export const updatePendingReimbursementStatus= (reimbursement:IReimbursement)=>{
  return {
    type: types.UPDATE_REIMBURSEMENT,
    reimbursement,
  }
}
export const setReimbursementUser= (user:IReimbursmentUserState)=>{
  return {
    type: types.SET_REIMBURSEMENT_USER,
    user,
  }
}
export const getReimbursementsByPage= (page:number)=>{
  return {
    type: types.GET_REIMBURSEMENTS_BY_PAGE,
    page
  }
}