import React from 'react';
import { render } from 'react-dom';

import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import ClientApp from './components/App';

render(<Router history={browserHistory}>
  <Route path="/" component={ClientApp} />
</Router>, document.getElementById('app'));
