import { combineReducers } from 'redux';
import reviewRatings from './reviewRatingReducers';
import homePageFilterReducer from './homePageFilterReducer';
import profileReducer from './profileReducers';

const allReducers = combineReducers({
    profile: profileReducer,
    reviewRatings,
    homePageFilterReducer
});

export default allReducers;
