import React, { Component } from 'react';

import HeaderButton from './HeaderButton';
import SearchBar from './SearchBar';
import MainBrand from '../branding/MainBrand';

import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const signInButtonText = this.props.auth ? 'Sign Out' : 'Sign In';

    return <header className='flex-container'>
      <MainBrand />
      <SearchBar />
      <div className='flex-container'>
        <HeaderButton text="Sign Up" buttonAction={ this.props.handleSignUp } />
        <HeaderButton text={signInButtonText} buttonAction={ this.props.handleAuth } />
      </div>
    </header>;
  }
};

export default Header;
