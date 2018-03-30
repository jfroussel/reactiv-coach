import React from 'react';
import PropTypes from 'prop-types';

const ToggleStarredButton = (props) => (
  <button className="toggle-starred-button" onClick={props.toggleStarred}>
    {props.starredFilter ? 'Show All' : 'Show Starred'}
  </button>
);

ToggleStarredButton.propTypes = {
  starredFilter: PropTypes.bool.isRequired,
  toggleStarred: PropTypes.func.isRequired
};

export default ToggleStarredButton;