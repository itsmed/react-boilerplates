import React, { Component } from 'react';

import dbData from '../../fake_db';

import Header from './header/Header';
import CategoriesContainer from './CategoriesContainer/CategoriesContainer';
import PostFullView from './blog/PostFullView';

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
      <PostFullView post={data.categories.Intro.posts[0]} />
    </div>;
  }
}

export default App;
