import React, { Component } from 'react';

import PostCategoryPreview from './PostCategoryPreview';

class CategoriesContainer extends Component {

  constructor(props) {
    super(props);
  }

  handleClick(e) {
    const name = e.target.dataset.categoryName;
    this.refs[name].style = { display: 'block' }
  }

  render() {
    const { categories } = this.props;
    return <div>
      <h3>Categories</h3>
      {
        Object.keys(categories).map((v, i) => {
          var p = v;
          return <div key={i}>
            <h3 data-category-name={v} onClick={ this.handleClick.bind(this) }>{v}</h3>
            <ul style={{display: 'none'}} ref={v}>
              {categories[p].posts.map(post => <li>{<PostCategoryPreview post={post} />}</li>)}
            </ul>  
          </div>;
        })
      }
    </div>;
  }
}

export default CategoriesContainer;
