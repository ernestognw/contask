import balance from './balance';
import auth from './auth';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  balance,
  auth
})

export default rootReducer;