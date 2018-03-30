import React, { Component} from 'react';
import PropTypes from 'prop-types';

class ListInput extends Component {
  constructor(props) {
    super(props);
    this.handleListInputChange = this.handleListInputChange.bind(this);
    this.submitListInput = this.submitListInput.bind(this);
  }

  handleListInputChange(event) {
    const name = event.target.value;
    this.props.updateListInput(name);
  }

  submitListInput(event) {
    const name = event.target.value;
    if (event.which === 13 && name.trim() !== '') {
      this.props.addFriend(name);
      this.props.updateListInput('');
    }
  }

  render() {
    return (
      <div className="list-input">
        <input
          type="text"
          placeholder="Enter a name!"
          value={this.props.listInput}
          onChange={this.handleListInputChange}
          onKeyDown={this.submitListInput}
        />
      </div>
    );
  }
}

ListInput.propTypes = {
  listInput: PropTypes.string.isRequired,
  updateListInput: PropTypes.func.isRequired,
  addFriend: PropTypes.func.isRequired
};

export default ListInput;