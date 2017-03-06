import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

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
      auth: false,
      user: '',
      showModal: false,
    };
  }

  render() {
    const { data } = this.state;
    return <div>
      <Header
        auth={ this.state.auth }
        handleSignUp={ this.handleSignUp.bind(this) }
        handleAuth={ this.handleAuth.bind(this) }
      />
      { this.state.showModal ? 
        <Authorization
          handleSignIn={ this.handleSignIn.bind(this) }
          handleSignUp={ this.handleSignUp.bind(this) }
          message="Sign Up"
          ref="auth"
        />
        : '' 
      }
      <div className='flex-container'>
        <h2>{ this.state.user }</h2>
        <CategoriesContainer categories={ data.categories } />
        <PostFullView post={data.categories.Intro.posts[0]} />
        { this.state.auth ? <BlogManagementPanel /> : '' }
      </div>
    </div>;
  }

  handleSignUp(user) {
    this.toggleModal();
  }

  handleSignIn(user) {
    return this.setState({
      user,
      auth: true,
      showModal: false,
    });
  }

  handleAuth() {
    return this.setState({
      auth: !this.state.auth
    });
  } 

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    })
  }
}

export default App;
