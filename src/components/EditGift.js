import React from 'react';

export default class EditGift extends React.Component{

  isAdd = !this.props.params.giftId;
  method = (this.isAdd) ? this.props.addGift : this.props.editGift;
  labelButton = (this.isAdd) ? 'Add' : 'Edit';

  handleSubmit=(e)=> {
    e.preventDefault();
    const name = this.refs.name.value;
    const price = this.refs.price.value;
    const categories = this.refs.categories.value.replace(' ','').split(',')
    let params = [name, price, categories];
    if (!this.Add){
      params = [...params, this.props.params.giftId, this.props.params.idx];
    }
    
    this.method.apply(null, params);
    this.props.router.push(`/gifts/category/${categories[0]}`);
  };
  render() {
    const item = this.props.gifts[this.props.params.giftId] || {name:'', price:0,category:[]}
    console.log(item);
    item.categories = item.category.join(",");
    return (
      <div>
        <h2>{this.labelButton} Gift</h2>
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="name" placeholder="name" defaultValue={item.name}/><br/>
          <input type="text" ref="price" placeholder="price" defaultValue={item.price}/><br/>
          <input type="text" ref="categories" placeholder="foo, bar, zoo" defaultValue={item.categories}/> <br/>
          multiples values separe by ","<br/>
          <input type="submit" value={`${this.labelButton} Gift`} />
        </form>
      </div>
    )
  }
}
