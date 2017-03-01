import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
  }

  handleChange(e) {
    console.log('e', e.target.value);
  }

  render() {
    return <input type="text" placeholder="Search" onChange={ this.handleChange.bind(this) } />
  }
};

const { func } = React.PropTypes;

SearchBar.propTypes = {
  handleSearch: func
};

export default SearchBar;
