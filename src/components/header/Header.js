import React, { Component } from 'react';

import HeaderButton from './HeaderButton';
import SearchBar from './SearchBar';
import MainBrand from '../branding/MainBrand';

import '../../styles/header.scss';

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
        <HeaderButton text="Sign Up" />
        <HeaderButton text={signInButtonText} />
      </div>
    </header>;
  }
};

export default Header;
