import { combineReducers } from 'redux';
import loginReducer from './loginReducer'
import reimbursementsReducer from './reimbursementsReducer';
import usersReducer from './usersListReducer'
import messageReducer from './messageReducer'
import reimbursementPendingReducer from './reimbursementPendingReducer';
import userReimbursementReducer from './userReimbursementReducer';
import reimbursementByPageReducer from './reimbursementByPageReducer';


const rootReducer = combineReducers({
  loginState :loginReducer,
  reimbursementsListState :reimbursementsReducer,
  reimbursementsPendingListState : reimbursementPendingReducer,
  usersListState : usersReducer,
  messageState: messageReducer,
  userReimbursementState:userReimbursementReducer,
  reimbursmentByPageState:reimbursementByPageReducer
});

export default rootReducer;