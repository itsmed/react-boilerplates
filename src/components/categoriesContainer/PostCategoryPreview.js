import React, { Component } from 'react';

class PostCategoryPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, author, text } = this.props;
    return <div>
      <h1>{ title }</h1>
      <h3>{ author }</h3>
      <p>{ text.split(' ').slice(0, 10) }</p>
    </div>;
  }
}

export default PostCategoryPreview;
