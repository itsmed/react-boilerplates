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

  showModal() {
    this.refs.auth.refs['auth-container'].classList.remove('hidden');
  }

  handleSignUp(e) {
    e.preventDefault();
    this.showModal();
    console.log(this.refs);
  }

  handleAuth() {
    if (this.state.auth) {
      return this.showModal();
    } else {
      this.setState({
        auth: !this.state.auth
      });
    }
  }

  render() {
    const { data } = this.state;

    return <div>
      <Header
        auth={ this.state.auth }
        handleSignUp={ this.handleSignUp.bind(this) }
        handleAuth={ this.handleAuth.bind(this) }
      />
      <Authorization message="Sign Up" ref="auth" />
      <div className='flex-container'>
        <CategoriesContainer categories={ data.categories } />
        <PostFullView post={data.categories.Intro.posts[0]} />
        { this.state.auth ? <BlogManagementPanel /> : '' }
      </div>
    </div>;
  }
}

export default App;
