


import * as types from '../actions/all.type.actions';
import { IMessageState, IReimbursmentUserState } from './state.models';

let initialState:IReimbursmentUserState ={
    id: undefined, // primary key
    userName: undefined,// not null, unique
    firstName: undefined, // not null
    lastName:undefined,
    email: undefined, // not null
    role: undefined
  }


export default function(state:IReimbursmentUserState = initialState, action:any) {
  let response:IMessageState= action.user;
  switch(action.type) {
    case types.SET_REIMBURSEMENT_USER:
      return { ...state , ...response };
      
    default:
      return {...state};
  }
}