import React, { Component } from 'react';

import UserAvatar from '../user/UserAvatar';

import '../../styles/blog.scss';

class PostFullView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post } = this.props;

    return <div className="blog-full-view">
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
