import { connect } from 'react-redux';
import Friend from './../components/Friend';
import { removeFriend, starFriend } from './../actions';

const mapDispatchToProps = dispatch => ({
  removeFriend: id => {
    dispatch(removeFriend(id));
  },
  starFriend: id => {
    dispatch(starFriend(id));
  }
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Friend);