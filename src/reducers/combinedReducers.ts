import { combineReducers } from 'redux';
import media from './mediaReducers';

const allReducers = combineReducers({
    media
});

export default allReducers;
