import React, { Component } from 'react';

import PostCategoryPreview from './PostCategoryPreview';

class CategoriesContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { categories } = this.props;
    return <div>
      <h3>Categories</h3>
      {
        Object.keys(categories).map((v, i) => {
          return <div key={i}>
            {v}
          </div>;
        })
      }
    </div>;
  }
}

// const { s}

//CategoriesContainer.propTypes = {
//   name: React.PropTypes.string,
// };

export default CategoriesContainer;
