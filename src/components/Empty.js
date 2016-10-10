import React from 'react';


class Empty extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>
          Empty
        </h2>
         {/*this.props.categories.map((category, idx) => <CategoryItem key={idx} categoryName={category.name} />)*/}
      </div>
    )
  }
};

export default Empty;