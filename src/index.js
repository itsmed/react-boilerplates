import React from 'react';
import { render } from 'react-dom';

import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import ClientApp from './components/App';
import EditPostView from './components/blog/EditPostView';
import Layout from './components/Layout';

render(<Router history={browserHistory}>
  <Route path="/" component={Layout}>
    <IndexRoute component={ClientApp} />
    <Route path="/edit" component={EditPostView} />
  </Route>
</Router>, document.getElementById('app'));
