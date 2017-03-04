import React, { Component } from 'react';

import './user_avatar.scss';

class UserAvatar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="avatar-container">
      { this.props.pic === undefined? <p>No Image Available</p> : <img src={this.props.pic} id="avatar" /> }
    </div>;
  }
}

export default UserAvatar;
