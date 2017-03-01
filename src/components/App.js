import React, { Component } from 'react';

import dbData from '../../fake_db';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dbData
    };
  }

  render() {
    console.log('state', this.state);
    return <div>
      <h1>Hello from the app!</h1>
      <p>This was more difficult than webpack 1!</p>
      <p>But it works now!</p>
      <pre>
        <code>
          { 12 * 12}
        </code>
      </pre>
    </div>
  }
}

export default App;
