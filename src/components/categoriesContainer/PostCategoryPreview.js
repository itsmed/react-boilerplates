import React, { Component } from 'react';

class PostCategoryPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, author, text } = this.props.post;
    return <div>
      <h3>{ title }</h3>
      <h5>{ author }</h5>
      <p>{ text.split(' ').slice(0, 10).join(' ') }</p>
      {this.props.post.comments.length > 1 ? this.props.post.comments.length + ' comments' : this.props.post.comments.length + ' comment'}
    </div>;
  }
}

export default PostCategoryPreview;
