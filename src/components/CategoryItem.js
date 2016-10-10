import React from 'react';
import { Link } from 'react-router';

class CategoryItem extends React.Component {
	render(){
		return (
			<li>
				<Link to={`/gifts/category/${this.props.categoryName}`}  className="category-name" >{this.props.categoryName}</Link>
				<Link to={`/category/${this.props.categoryName}/${this.props.idx}`}  className="edit-category" >Edit</Link>
				<button className="remove-category" 
					onClick={this.props.removeCategory.bind(null, this.props.categoryName, this.props.idx)}>&times;</button>
			</li>
		)
	}
}

export default CategoryItem;