import React, { Component } from 'react';

import dbData from '../../fake_db';

import Header from './header/Header';
import CategoriesContainer from './CategoriesContainer/CategoriesContainer';
import PostFullView from './blog/PostFullView';
import BlogManagementPanel from './dashboard/BlogManagementPanel';
import Authorization from './auth/Authorization';

import './index.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dbData,
      auth: true,
    };
  }

  handleSignUp(e) {
    e.preventDefault();
    console.log(e.target.textContent);
  }

  handleAuth() {
    console.log('auth');
  }

  render() {
    const { data } = this.state;

    return <div>
      <Header
        auth={ this.state.auth }
        handleSignUp={ this.handleSignUp.bind(this) }
        handleAuth={ this.handleAuth.bind(this) }
      />
      <Authorization message="Sign Up" />
      <div className='flex-container'>
        <CategoriesContainer categories={ data.categories } />
        <PostFullView post={data.categories.Intro.posts[0]} />
        { this.state.auth ? <BlogManagementPanel /> : '' }
      </div>
    </div>;
  }
}

export default App;
