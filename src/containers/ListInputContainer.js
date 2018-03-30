import { connect } from 'react-redux';
import ListInput from './../components/ListInput';
import { updateListInput, addFriend } from './../actions';

const mapStateToProps = state => ({
  listInput: state.listInput
});

const mapDispatchToProps = dispatch => ({
  updateListInput: listInput => {
    dispatch(updateListInput(listInput));
  },
  addFriend: name => {
    dispatch(addFriend(name));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListInput);