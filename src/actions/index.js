import * as types from './../constants/ActionTypes';

// listInput Actions

const updateListInput = listInput => ({
  type: types.UPDATE_LIST_INPUT,
  listInput
});

// friendsList Actions

const addFriend = name => ({
  type: types.ADD_FRIEND,
  name
});

const removeFriend = id => ({
  type: types.REMOVE_FRIEND,
  id
});

const starFriend = id => ({
  type: types.STAR_FRIEND,
  id
});

const toggleStarred = () => ({
  type: types.TOGGLE_STARRED
});

export {
  updateListInput,
  addFriend,
  removeFriend,
  starFriend,
  toggleStarred
};