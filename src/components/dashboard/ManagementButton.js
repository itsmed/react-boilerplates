import React, { Component } from 'react';

import './dashboard.scss';

class ManagementButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.action();
  }

  render() {
    return <button className="dashboard-button" onClick={ this.handleClick.bind(this) }>
      { this.props.text }
    </button>;
  }
}

export default ManagementButton;
