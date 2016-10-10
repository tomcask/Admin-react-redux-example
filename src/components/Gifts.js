import React from 'react';
import dummyData from '../data/dummyData';

class GiftItem extends React.Component {
  render(){
    return(
      <div>
        <span>{ this.props.name }</span>
      </div>
    )
  }
}

// const category = data.lookupCategory(params.category)

//   return (
//     <div>
//       <h2>{category.name} Gifts</h2>
//       <ul>
//         {category.items.map((item, index) => (
//           <li key={index}>
//             <Link to={`/category/${category.name}/${item.name}`}>{item.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )


class Gifts extends React.Component {
  render() {
    const params = this.props.params;
    console.log(this.props, params);

    const category = dummyData.lookupCategory(params.categoryId)
    console.log(category);
    return (
      <div>
        <h2>{category.name} Gifts</h2>
         {/*this.props.gifts.map((gift, idx) => <GiftItem key={idx} name={gift.name} />)*/}
         <ul>
            {category.items.map((item, index) => (
          <li key={index}>
            <span className="gift-name">{item.name}</span>
            <span className="gift-price">${item.price}</span>
          </li>
        ))}
         </ul>

      </div>
    )
  }
};

export default Gifts;