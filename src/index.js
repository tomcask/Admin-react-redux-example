import React from 'react';
import { render } from 'react-dom';

// Import Components
import App from './components/App';
import Sidebar from './components/Sidebar';
import Gifts from './components/Gifts';

// import react router deps
import { Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Sidebar}></IndexRoute>
        <Route path="/gifts/byCategory/:categoryId" component={Gifts}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('main'));
