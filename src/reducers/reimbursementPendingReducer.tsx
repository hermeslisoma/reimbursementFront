import * as types from '../actions/all.type.actions';
import { IReimbursement } from './state.models';

const initialState:IReimbursement[] = []

export default function(state = initialState, action:any) {
  const response= action.response ;
  
  
  switch(action.type) {
    case types.GET_REIMBURSEMENTS_BY_STATUS_SUCCESS:
        let reimList:IReimbursement[];
      if(response.status==204) {
        //store.dispatch(setMessage("hola"))
        reimList = []
        return [ reimList ];
      }else{
        reimList = response.data
        
        return [...reimList ];
      }
    case types.UPDATE_REIMBURSEMENT_SUCSESS:
        let updateItem:IReimbursement;
        if(response.status==200) {
          updateItem = response.data
          let newList = state.filter((u)=>u.reimbursement_id!=updateItem.reimbursement_id)
          return [ ...newList ];
        }else{
          
          return [...state ];
        }
    default:
          return [...state] ;
  }
};  