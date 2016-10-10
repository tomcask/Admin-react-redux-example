import React from 'react';
import CategoryItem from './CategoryItem';

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <h2>
          Categories
        </h2>
         <ul>{this.props.categories.map((category, idx) => <CategoryItem key={idx} categoryName={category.name} />)}</ul>
         <span className="lastUpdate">lastUpdate {Date.now()}</span>
      </div>
    )
  }
};

export default Sidebar;