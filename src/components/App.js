import React, { Component } from 'react';

import dbData from '../../fake_db';

import Header from './header/Header';
import CategoriesContainer from './CategoriesContainer/CategoriesContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dbData
    };
  }

  render() {
    const { data } = this.state;

    return <div>
      <Header />
      <CategoriesContainer categories={ data.categories } />
    </div>;
  }
}

export default App;
