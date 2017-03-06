import React, { Component } from 'react';

import PostCategoryPreview from './PostCategoryPreview';

import _ from 'lodash';

import './categories.scss';

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
    console.log(categories);
    return <div id="categories-container">
      <h3>Categories</h3>
      {
        _.map(categories, (category, i) => {
          const categoryName = category.name;
          console.log('category', category);
          return <div key={i}>
            <h3 data-category-name={category.name} onClick={ this.handleClick.bind(this) }>{category.name}</h3>
            <ul style={{display: 'none'}} ref={categoryName}>
              {category.posts.map(post => <li>{<PostCategoryPreview post={post} />}</li>)}
            </ul>  
          </div>;
        })
      }
    </div>;
  }
}

export default CategoriesContainer;
