import * as types from './all.type.actions';

export const registerUserAction = (user:any) => {
  return {
    type: types.REGISTER_USER,
    user:user
  }
};
export const loginUserAction = (user:any) => {
  return {
    type: types.LOGIN_USER,
    user:user
  }
};
interface userToUpdate{
  userName : string,
  firstName: string,
  lastName:string,
  email: string,
  role:number
}
export const updateUserAction = (id:number,user: userToUpdate) => {
  return {
    type: types.UPDATE_USER,
    id:id,
    user:user
  }
};
export const deleteUserAction =(id:any) => {
  return {
    type: types.DELETE_USER,
    id
  }
}

export const updateState = (loginState:any) => {
  return {
    type: types.UPDATE_STATE_VALIDATION_ERROR,
    response: loginState
  }
};
;

export const logout = () => {
  let payload = 3
  return {
    type: types.LOGOUT,
    payload
  }
};