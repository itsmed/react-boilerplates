import React, { Component } from 'react';

import dbData from '../../fake_db';

import Header from './header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dbData
    };
  }

  render() {
    return <div>
      <Header />
    </div>
  }
}

export default App;
