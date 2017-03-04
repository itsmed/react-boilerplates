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
      user: '',
      showModal: true,
    };
  }

  render() {
    const { data } = this.state;
    return <div>
      <Header
        auth={ this.state.auth }
        handleSignUp={ this.toggleModal.bind(this) }
        handleSignOut={ this.handleSignOut.bind(this) }
      />
      { this.state.showModal ? <Authorization
        handleSignIn={ this.handleSignIn.bind(this) }
        handleSignUp={ this.handleSignUp.bind(this) }
        message="Sign Up"
        ref="auth"
      /> : '' }
      <div className='flex-container'>
        <CategoriesContainer categories={ data.categories } />
        <PostFullView post={data.categories.Intro.posts[0]} />
        { this.state.auth ? <BlogManagementPanel /> : '' }
      </div>
      <h2>{ this.state.user }</h2>
    </div>;
  }

  handleSignUp(user) {
    return this.setState({
      user,
      auth: !this.state.auth,
    });
    this.toggleModal();
  }

  handleSignIn(user) {
    return this.setState({
      user,
      auth: !this.state.auth,
    });
    this.toggleModal();
  }

  handleSignOut() {
    return this.setState({
      user: '',
      auth: !this.state.auth,
    });
  }

  toggleModal() {
    const target = this.refs.auth.refs['auth-container'];
    if (this.refs.auth.refs['auth-container'].classList.contains('hidden')) {
      this.refs.auth.refs['auth-container'].classList.remove('hidden');
    console.dir(target);
      return;
    } else {
      this.refs.auth.refs['auth-container'].classList.add('hidden');
      return;
    }
  }
  // showModal() {
  //   const target = this.refs.auth.refs['auth-container'];
  //   if (target.classList.contains('hidden')) {
  //     target.classList.remove('hidden');
  //   } else {
  //     target.classList.add('hidden');
  //   }
  // }

  // handleSignUp(e) {
  //   e.preventDefault();
  //   this.showModal();
  //   console.log(this.refs);
  // }

  // handleAuth() {
  //   if ( !(this.state.auth) ) {
  //     return this.showModal();
  //   } else {
  //     return this.handleSignIn();
  //   }
  // }

  // handleSignIn() {
  //   this.setState({
  //     auth: !this.state.auth
  //   });
  //   this.refs.auth.refs['auth-container'].classList.remove('hidden');
  // }
}

export default App;
