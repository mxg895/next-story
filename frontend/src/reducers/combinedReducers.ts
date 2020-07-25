import { combineReducers } from 'redux';
import reviewRatings from './reviewRatingReducers';
import homePageFilterReducer from './homePageFilterReducer';
import profileReducer from './profileReducers';
import booksMoviesReducers from './booksMoviesReducers';

const allReducers = combineReducers({
    profile: profileReducer,
    reviewRatings,
    homePageFilterReducer,
    booksMovies: booksMoviesReducers
});

export default allReducers;
