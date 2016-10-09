import React from 'react';
import { Link } from 'react-router';

class CategoryItem extends React.Component {
	render(){
		return (
			<li><Link key={this.props.idx} to={`/gifts/byCategory/${this.props.categoryName}`}>{this.props.categoryName} </Link></li>
		)
	}
}

export default CategoryItem;