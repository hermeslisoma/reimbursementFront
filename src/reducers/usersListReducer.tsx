import * as types from '../actions/all.type.actions';
import { IUserListItem } from './state.models';


const initialState:IUserListItem[]  = []


export default function(state:IUserListItem[] = initialState, action:any) {
  let response:IUserListItem[] 

  switch(action.type) {
    case types.GET_LIST_USERS_SUCCESS:
        response = action.response;
      return [...response ];

    case types.UPDATE_USER_SUCCESS:
      let updateUser = action.response.data
      return state.map((user)=>{
        if(user.id==updateUser.id){
          return updateUser
        }
        return user
        
      })
    case types.DELETE_USER_SUCCESS:
      console.log('in the reducer::',action.response)
      let deleteId = action.response.data.id 
      return state.filter(user=>user.id!=deleteId);
    default:
      return [...state];
  }
}