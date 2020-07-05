import { combineReducers } from 'redux';
import reviewRatings from './reviewRatingReducers';

const allReducers = combineReducers({
    reviewRatings
});

export default allReducers;
