import React from 'react';

export default class GiftsContainer extends React.Component {
  render () {
    return (
      <div>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
}