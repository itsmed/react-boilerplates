import React, { Component } from 'react';

import UserAvatar from '../user/UserAvatar';

class PostFullView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post } = this.props;

    return <div>
      <div>
        <UserAvatar />
        <h4>{ post.author }</h4>
      </div>
      <div>
        <h2>{ post.title }</h2>
        <p>{ post.text }</p>
      </div>
    </div>;
  }
}

export default PostFullView;
