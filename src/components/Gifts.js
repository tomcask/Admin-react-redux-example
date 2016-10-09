import React from 'react';
class GiftItem extends React.Component {
  render(){
    return(
      <div>
        <span>{ this.props.name }</span>
      </div>
    )
  }
}

class Gifts extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>
          Gifts
        </h2>
         {this.props.gifts.map((gift, idx) => <GiftItem key={idx} name={gift.name} />)}

      </div>
    )
  }
};

export default Gifts;