import {
    CHANGE_HOME_PAGE_FILTER,
    ALL,
} from '../constants/homePageFilterConstants';

const homePageFilterReducer = (state = ALL, action: any) => {
    switch (action.type) {
        case CHANGE_HOME_PAGE_FILTER:
            return action.filterName;
        default:
            return state;
    }
};

export default homePageFilterReducer;
