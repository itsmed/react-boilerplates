import React, { Component } from 'react';

import HeaderButton from './HeaderButton';
import SearchBar from './SearchBar';
import MainBrand from '../MainBrand';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <header>
      <MainBrand />
      <SearchBar />
      <HeaderButton text="Sign Up" />
      <HeaderButton text="Sign In" />
    </header>;
  }
};

export default Header;
