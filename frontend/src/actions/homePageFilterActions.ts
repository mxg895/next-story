import {
    CHANGE_HOME_PAGE_FILTER
} from '../constants/homePageFilterConstants';

export const changeHomePageFilter = (filterName: string) => {
    return {
        type: CHANGE_HOME_PAGE_FILTER,
        filterName: filterName
    };
};
