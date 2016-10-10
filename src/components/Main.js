import React from 'react';
import { Link } from 'react-router';
import { render } from 'react-dom';
class Main extends React.Component {
  render() {
    const { main, sidebar } = this.props
    return (
      <div>
        <div className="sidebar">
          {React.createElement(sidebar, this.props)}
        </div>
        <div className="content">
          {React.createElement(main, this.props)}
        </div>
      </div>
    )
  }
};

export default Main;
