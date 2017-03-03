import React, { Component } from 'react';

class UserByLine extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h4>
      { this.props.name }
    </h4>;
  }
}

export default UserByLine;
