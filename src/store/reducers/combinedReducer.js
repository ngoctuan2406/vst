import { combineReducers } from 'redux';

import homeReducer from './homeReducer';
import myReducer from './myReducer';

const rootReducer = combineReducers({
    homeReducer,
    myReducer});

export default rootReducer;