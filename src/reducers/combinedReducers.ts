import { combineReducers } from "redux";
import mediaModalReducer from "./mediaModalReducers";

const allReducers = combineReducers({
    mediaModalReducer,
});

export default allReducers;
