import { combineReducers } from 'redux';
import reviewRatings from './reviewRatingReducers';
import homePageFilterReducer from './homePageFilterReducer';

const allReducers = combineReducers({
    reviewRatings,
    homePageFilterReducer
});

export default allReducers;
