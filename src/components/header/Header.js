import React, { Component } from 'react';

import HeaderButton from './HeaderButton';
import SearchBar from './SearchBar';
import MainBrand from '../branding/MainBrand';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let signInButtonText = this.props.auth ? 'Sign Out' : 'Sign In';

    return <header>
      <MainBrand />
      <SearchBar />
      <HeaderButton text="Sign Up" />
      <HeaderButton text={signInButtonText} />
    </header>;
  }
};

export default Header;
