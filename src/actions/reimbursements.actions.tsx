import * as types from './all.type.actions';


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