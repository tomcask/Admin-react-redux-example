import React from 'react';
import CategoryItem from './CategoryItem';
import { Link } from 'react-router';

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <h2>
          Categories
        </h2>
        <ul>
           {this.props.categories.map((category, idx) => 
              <CategoryItem 
                key={idx}
                idx={idx}
                categoryName={category} 
                {...this.props}
              />
            )}
         </ul>
         <Link to={`/category/`}>Add Category</Link>
      </div>
    )
  }
};

export default Sidebar;