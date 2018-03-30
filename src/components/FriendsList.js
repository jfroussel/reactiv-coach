import React from 'react';
import PropTypes from 'prop-types';
import FriendContainer from './../containers/FriendContainer';

const FriendsList = (props) => (
  <div className="friends-list">
    {props.friendsList.map(friend =>
      <FriendContainer
        key={friend.id}
        friend={friend}
      />
    )}
  </div>
);

FriendsList.propTypes = {
  friendsList: PropTypes.array.isRequired
};

export default FriendsList;