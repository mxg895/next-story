import { combineReducers } from 'redux';
import mediaModalReducer from './mediaModalReducers';
import reviewReducer from './reviewReducers';

const allReducers = combineReducers({
    reviewReducer,
    mediaModalReducer
});

export default allReducers;
