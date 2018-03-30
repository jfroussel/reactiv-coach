import * as types from './../constants/ActionTypes';

const initialListInput = '';

const listInputReducer = (state = initialListInput, action) => {
  switch (action.type) {
    case types.UPDATE_LIST_INPUT:
      return action.listInput;
    default:
      return state;
  }
};

export default listInputReducer;