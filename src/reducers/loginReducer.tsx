import * as types from '../actions/all.type.actions';
import { ILoginState } from './state.models';

//the reducer recieves the previous state and
//and action object with action.type and action.repsonse 
//which is the success response from the API 
const initialState:ILoginState = {
  rol:0,
  userId: 0,
  token : '',
  isAuthenticated: false,
  user : {},
  response:{
    message:''
  }
}

export default function(state:ILoginState = initialState, action:any) {
  const response = action.response;
  switch(action.type) {
   
    case types.LOGIN_USER_SUCCESS:
        const newState:ILoginState = {
            rol:response.user.role.id,
            userId: response.user.id,
            token : response.token,
            isAuthenticated: true,
            user: response.user
        }
      return {...state,...newState};
    case types.LOGOUT:
      
        localStorage.removeItem("loginUser")
        const newState2:ILoginState = {
            rol:0,
            userId: 0,
            token : '',
            isAuthenticated: false,
            user : {},
            response:{
              message:''
            }
        }
      return {...state,...newState2};
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
      
    case types.UPDATE_STATE_VALIDATION_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};