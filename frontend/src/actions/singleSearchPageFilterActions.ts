import {
    CHANGE_SINGLE_SEARCH_PAGE_FILTER
} from '../constants/singleSearchPageFilterConstants';

export const changeSingleSearchPageFilter = (filterName: string) => {
    return {
        type: CHANGE_SINGLE_SEARCH_PAGE_FILTER,
        filterName: filterName
    };
};
