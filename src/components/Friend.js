import React, { Component} from 'react';
import PropTypes from 'prop-types';


class Friend extends Component {
  constructor(props) {
    super(props);
    this.removeFriend = this.removeFriend.bind(this);
    this.starFriend = this.starFriend.bind(this);
  }

  removeFriend() {
    this.props.removeFriend(this.props.friend.id);
  }

  starFriend() {
    this.props.starFriend(this.props.friend.id);
  }

  render() {
    const { friend } = this.props;
    return (
      <div className="friend">
        <span className="friend-name">{friend.name}</span>
        <span onClick={this.removeFriend}>
          <i className="fas fa-trash-alt"></i>
        </span>
        <span className="friend-button" onClick={this.starFriend}>
          {
            friend.starred ?
            <i class="far fa-thumbs-up"></i> :
            <i class="far fa-thumbs-down"></i>
          }
        </span>
      </div>
    );
  }
}

Friend.propTypes = {
  removeFriend: PropTypes.func.isRequired,
  starFriend: PropTypes.func.isRequired,
  friend: PropTypes.object.isRequired
};

export default Friend;