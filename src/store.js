import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';

// import the root reducer
import rootReducer from './reducers/index';
import dummyData from './data/dummyData';

const categories = dummyData.getCategories();
const gifts = dummyData.getItems();

const defaultState = {
  gifts,
  categories
};


const logger = createLogger();

const store = createStore(rootReducer, defaultState, applyMiddleware(logger));

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
