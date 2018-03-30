
import * as types from './../constants/ActionTypes';

const initialStarredFilter = false;

const starredFilterReducer = (state = initialStarredFilter, action) => {
  switch (action.type) {
    case types.TOGGLE_STARRED:
      return !state;
    default:
      return state;
  }
};

export default starredFilterReducer;