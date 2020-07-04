import { combineReducers } from 'redux';
import reviews from './reviewReducers';

const allReducers = combineReducers({
    reviews
});

export default allReducers;
