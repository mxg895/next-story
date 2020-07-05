import { combineReducers } from 'redux';
import reviews from './ratingReviewReducers';

const allReducers = combineReducers({
    reviews
});

export default allReducers;
