import React from 'react';

export default class EditCategory extends React.Component{
  
  isAdd = !this.props.params.categoryId;
  method = (this.isAdd) ? this.props.addCategory : this.props.editCategory;
  labelButton = (this.isAdd) ? 'Add' : 'Edit';

  handleSubmit=(e)=> {
    e.preventDefault();
    const name = this.refs.name.value;
    let params = [name];
    if (!this.Add){
      params = [...params, this.props.params.idx, this.props.params.categoryId];
    }
    
    this.method.apply(null, params);
    this.props.router.push(`/gifts/category/${name}`);
  };
  render() {
    return (
      <div>
      <h2>{this.labelButton} Category</h2>
      <form ref="categoryForm" className="category-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="name" placeholder="name" defaultValue={this.props.params.categoryId}/><br/>
          <input type="submit" value={`${this.labelButton} Category`} />
        </form>
      </div>
    )
  }
}