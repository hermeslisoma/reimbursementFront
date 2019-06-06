import * as types from './all.type.actions'



export const clearMessage = () => {
    return {
      type: types.CLEAR_MESSAGE
    }
  };
  export const setMessage = (message:string) => {
    console.log('inside set message');
     
    return {
      type: types.SET_MESSAGE,
      message
    }
  };