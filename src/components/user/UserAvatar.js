import React, { Component } from 'react';

class UserAvatar extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return <div>
      { this.props.pic === undefined? 'No Image Available' : <img src={this.props.pic} /> }
    </div>;
  }
}

export default UserAvatar;
