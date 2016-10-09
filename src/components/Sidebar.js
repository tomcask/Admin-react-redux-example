import React from 'react';
import CategoryItem from './CategoryItem';

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <h2>
          Categories
        </h2>
         {this.props.categories.map((category, idx) => <CategoryItem key={idx} categoryName={category.name} />)}
      </div>
    )
  }
};

export default Sidebar;