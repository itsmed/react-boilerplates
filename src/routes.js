import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/Layout';
import BlogManagementPanel from './components/dashboard/BlogManagementPanel';
import CategoriesContainer from './components/categoriesContainer/CategoriesContainer';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts" component={BlogManagementPanel} />
    <Route path="cool" component={CategoriesContainer} />
  </Route>
);
