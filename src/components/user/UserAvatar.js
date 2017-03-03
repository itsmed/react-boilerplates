import React, { Component } from 'react';

import '../../styles/user_avatar.scss';

class UserAvatar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="avatar-container">
      { this.props.pic === undefined? 'No Image Available' : <img src={this.props.pic} id="avatar" /> }
    </div>;
  }
}

export default UserAvatar;
