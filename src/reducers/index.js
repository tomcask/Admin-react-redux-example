import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import categories from './categories';
import gifts from './gifts';

const rootReducer = combineReducers({categories, gifts, routing: routerReducer });

export default rootReducer;