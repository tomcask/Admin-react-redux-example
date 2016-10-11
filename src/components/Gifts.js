import React from 'react';
import { Link } from 'react-router';

class GiftItem extends React.Component {

  render(){
    return(
      <li key={this.props.index}>
        <span className="gift-name">{this.props.item.name}</span>
        <span className="gift-price">${this.props.item.price}</span>
        <Link to={`/gifts/${this.props.item.name}/`}  className="edit-category" >Edit</Link>
        <button className="remove-gift" 
          onClick={this.props.removeGift.bind(null, this.props.item.name, this.props.index)}>&times;</button>
      </li>
    )
  }
}



class Gifts extends React.Component {
  render() {

    const getItemsCategory = function(category, gifts){
      let giftsOrdered=[]; 
      Object.keys(gifts).map(function(k,i,c){
        gifts[k].category.map((val)=>{
          val===category && giftsOrdered.push(gifts[k]);   
        })
        
      });
      return giftsOrdered;
    };

    const gifts = getItemsCategory( 
      this.props.params.categoryId, 
      this.props.gifts
    );
    return (
      <div>
        <h2>{this.props.params.categoryId} Gifts</h2>
         <ul>
            {gifts.map((item, index) => (
              <GiftItem {...this.props}  key={index} item={item} index={index}/>
            ))}
         </ul>
        <Link to={'/gifts/'}  className="add-gift" >Add Gift</Link>
      </div>
    )
  }
};

export default Gifts;