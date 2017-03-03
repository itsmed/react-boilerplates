import React, { Component } from 'react';

import dbData from '../../fake_db';

import Header from './header/Header';
import CategoriesContainer from './CategoriesContainer/CategoriesContainer';
import PostFullView from './blog/PostFullView';
import BlogManagementPanel from './dashboard/BlogManagementPanel';

import '../styles/index.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dbData,
      auth: false,
    };
  }

  render() {
    const { data } = this.state;

    return <div>
      <Header />
      <div className='flex-container'>
        <CategoriesContainer categories={ data.categories } />
        <PostFullView post={data.categories.Intro.posts[0]} />
        { this.state.auth ? <BlogManagementPanel /> : '' }
      </div>
    </div>;
  }
}

export default App;
