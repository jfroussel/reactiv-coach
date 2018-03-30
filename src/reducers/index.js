import { combineReducers } from 'redux';
import starredFilterReducer from './starredFilterReducer';
import listInputReducer from './listInputReducer';
import friendsListReducer from './friendsListReducer';

const rootReducer = combineReducers({
  starredFilter: starredFilterReducer,
  listInput: listInputReducer,
  friendsList: friendsListReducer
});

export default rootReducer;