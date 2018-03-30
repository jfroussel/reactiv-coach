import { connect } from 'react-redux';
import FriendsList from './../components/FriendsList';

const applyStarredFilter = (friendsList, starredFilter) => {
  return starredFilter ?
    friendsList.filter(friend => friend.starred) :
    friendsList;
};

const mapStateToProps = state => ({
  friendsList: applyStarredFilter(state.friendsList, state.starredFilter)
});

export default connect(
  mapStateToProps
)(FriendsList);