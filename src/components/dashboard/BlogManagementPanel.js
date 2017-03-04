import React, { Component } from 'react';

import ManagementButton from './ManagementButton';

import './dashboard.scss';

class BlogManagementPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div style={{flex: 1}} >
      <div className="dashboard-container">
        <ManagementButton text='Create Post' />
        <ManagementButton text='Delete Post' />
        <ManagementButton text='Edit Post' />
      </div>
    </div>;
  }
}

export default BlogManagementPanel;
