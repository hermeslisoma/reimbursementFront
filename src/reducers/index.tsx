import { combineReducers } from 'redux';
import register from './registerReducer';
import loginReducer from './loginReducer'
import reimbursementsReducer from './reimbursementsReducer';
import usersReducer from './usersListReducer'
import messageReducer from './messageReducer'


const rootReducer = combineReducers({
  register,
  loginState :loginReducer,
  reimbursementsListState :reimbursementsReducer,
  usersListState : usersReducer,
  messageState: messageReducer
});

export default rootReducer;