import React from 'react';

class Main extends React.Component {
  render() {
    const { main, sidebar } = this.props
    return (
      <div>
        <div className="sidebar">
          {React.createElement(sidebar, {...this.props, router:this.context.router})}
        </div>
        <div className="content">
          {React.createElement(main, {...this.props, router:this.context.router})}
        </div>
      </div>
    )
  }
};

Main.contextTypes = {
    router: React.PropTypes.object.isRequired,
    store:React.PropTypes.object
}

export default Main;
