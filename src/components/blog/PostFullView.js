import React, { Component } from 'react';

import UserAvatar from '../user/UserAvatar';
import UserByLine from '../user/UserByLine';

class PostFullView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post } = this.props;

    return <div>
      <div>
        <UserAvatar />
        <UserByLine />
        <h2>{ post.title }</h2>
        <p>{ post.text }</p>
      </div>
    </div>;
  }
}

export default PostFullView;
