import {combineReducers } from 'redux';
import {authedUser} from '../reducers/authedUser';
import {questionReducer} from '../reducers/questionReducer';
import {userReducer} from '../reducers/userReducer';

export const rootReducer = combineReducers (
  {authedUser,
  questionReducer,
  userReducer
});

