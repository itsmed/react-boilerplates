import React, { Component } from 'react';

import ManagementButton from './ManagementButton';

class BlogManagementPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <ManagementButton text='Create Post' />
        <ManagementButton text='Delete Post' />
        <ManagementButton text='Edit Post' />
      </div>
    </div>;
  }
}

export default BlogManagementPanel;
