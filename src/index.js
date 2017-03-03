import React from 'react';
import { render } from 'react-dom';

import ClientApp from './components/App';

const App = () => (
  <div>
    <App />
  </div>
);

render(<ClientApp />,
  document.getElementById('app'));
