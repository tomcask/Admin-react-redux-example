import React from 'react';
import { render } from 'react-dom';

// Import css
import normalizeCss from './css/_normalize.css';
import css from './css/styles.css';

// Import Components
import App from './components/App';
import Gifts from './components/Gifts';
import Empty from './components/Empty';
import EditGift from './components/EditGift';
import EditCategory from './components/EditCategory';
// import react router deps
import { Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      	<IndexRoute component={Empty}></IndexRoute>
        <Route path="/gifts/category/:categoryId" component={Gifts}></Route>
        <Route path="/gifts/:giftId/" component={EditGift}></Route>
        <Route path="/gifts/" component={EditGift}></Route>
        <Route path="/category/:categoryId/:idx" component={EditCategory}></Route>
        <Route path="/category/" component={EditCategory}></Route>
        <Route path="*" component={Empty}/>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('main'));
