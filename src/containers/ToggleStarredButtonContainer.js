import { connect } from 'react-redux';
import ToggleStarredButton from './../components/ToggleStarredButton';
import { toggleStarred } from './../actions';

const mapStateToProps = state => ({
  starredFilter: state.starredFilter
});

const mapDispatchToProps = dispatch => ({
  toggleStarred: () => {
    dispatch(toggleStarred());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleStarredButton);