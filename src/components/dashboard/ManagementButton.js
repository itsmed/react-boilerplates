import React, { Component } from 'react';

class ManagementButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.action();
  }

  render() {
    return <button onClick={ this.handleClick.bind(this) }>
      { this.props.text }
    </button>;
  }
}

export default ManagementButton;
