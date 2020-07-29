import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {
    Hidden,
    BottomNavigation,
    BottomNavigationAction
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import BookIcon from '@material-ui/icons/Book';
import {connect} from 'react-redux';
import { changeHomePageFilter } from '../../actions/homePageFilterActions';
import { changeSingleSearchPageFilter } from '../../actions/singleSearchPageFilterActions';
import {
    ALL,
    MOVIES,
    BOOKS
} from '../../constants/homePageFilterConstants';

const MobileFilters = styled(BottomNavigation)`
    width: 100%;
    position: fixed;
    bottom: 0;
`;

const MobileFilter = (props: any) => {
    const { singleSearchPageFilter, isSearchPage } = props;
    const [storyType, setStoryType] = useState<string>(ALL);
    const handleChange = (event: React.ChangeEvent<{}>, newType: string) => {
        setStoryType(newType);
    };

    useEffect(() => {
        if (isSearchPage && singleSearchPageFilter) {
            setStoryType(singleSearchPageFilter);
        }
    }, [singleSearchPageFilter]);

    useEffect(() => {
        switch (storyType) {
            case 'all':
                isSearchPage ? props.changeSingleSearchPageFilter(ALL) : props.changeHomePageFilter(ALL);
                break;
            case 'movies':
                isSearchPage ? props.changeSingleSearchPageFilter(MOVIES) : props.changeHomePageFilter(MOVIES);
                break;
            case 'books':
                isSearchPage ? props.changeSingleSearchPageFilter(BOOKS) : props.changeHomePageFilter(BOOKS);
                break;
            default:
                break;
        }
    }, [storyType]);

    return (
        <Hidden mdUp>
            <MobileFilters
                value={storyType}
                onChange={handleChange}
                showLabels
                aria-label='home-page-filter'
            >
                <BottomNavigationAction
                    label='All'
                    icon={<HomeIcon />}
                    value={'all'}
                />
                <BottomNavigationAction
                    label='Movies'
                    icon={<MovieIcon />}
                    value={'movies'}
                />
                <BottomNavigationAction
                    label='Books'
                    icon={<BookIcon />}
                    value={'books'}
                />
            </MobileFilters>
        </Hidden>
    );
};

const mapStateToProps = (state: any) => {
    return {
        singleSearchPageFilter: state.singleSearchPageFilterReducer
    };
};

export default connect(mapStateToProps, { changeHomePageFilter, changeSingleSearchPageFilter })(MobileFilter);
