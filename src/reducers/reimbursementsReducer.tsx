import * as types from '../actions/all.type.actions';
import { IReimbursement } from './state.models';

const initialState:IReimbursement[] = []

export default function(state = initialState, action:any) {
  const response= action.response ;
  
  
  switch(action.type) {
    case types.GET_REIMBURSEMENTS_BY_ID_SUCCESS:
      let reimList:IReimbursement[];
      if(response.status==204) {
        //store.dispatch(setMessage("hola"))
        reimList = []
        return [ reimList ];
      }else{
        reimList = response.data
        
        return [...reimList ];
      }
    case types.ADD_REIMBURSEMENT_SUCCESS:
      if (response.status==201){
        return [...state,response.data]
      }else{
        return [...state]
      } 
    default:
          return state ;
  }
};       