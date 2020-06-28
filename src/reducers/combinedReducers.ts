import { combineReducers } from 'redux';
import media from './reviewReducers';

const allReducers = combineReducers({
    media
});

export default allReducers;
