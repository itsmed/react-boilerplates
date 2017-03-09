import React from 'react';
import { Link } from 'react-router';

const Layout = (props) => (
  <div>
  <h1>Header? <Link to="/edit">Edit</Link></h1>
  { props.children }
  </div>
);

export default Layout;
