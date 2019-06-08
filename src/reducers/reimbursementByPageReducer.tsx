import * as types from '../actions/all.type.actions';
import { IPagesReimbursements, IReimbursement } from './state.models';

const initialState:IPagesReimbursements ={
    reimbursementList:[],
    currentUrl:undefined,
    pageCount:0,
    pagesUrl:[],
  
  }

export default function(state = initialState, action:any) {
  const response= action.response ;
  
  
  switch(action.type) {
    case types.GET_REIMBURSEMENTS_BY_PAGE_SUCCESS:
      if(response.status==200) {
        //store.dispatch(setMessage("hola"))
        const newPageState:IPagesReimbursements ={
          reimbursementList:response.data.result,
          pageCount:response.data.pageCount,
          pagesUrl:response.data.pages,
          currentUrl:response.data.current
        }
        return {...newPageState };
      }
    default:
            return {...state };
  }
};  