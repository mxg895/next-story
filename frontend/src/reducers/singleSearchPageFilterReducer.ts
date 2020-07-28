import { CHANGE_SINGLE_SEARCH_PAGE_FILTER } from '../constants/singleSearchPageFilterConstants';
import { ALL } from '../constants/homePageFilterConstants';

const singleSearchPageFilterReducer = (state = ALL, action: any) => {
    switch (action.type) {
        case CHANGE_SINGLE_SEARCH_PAGE_FILTER:
            return action.filterName;
        default:
            return state;
    }
};

export default singleSearchPageFilterReducer;
