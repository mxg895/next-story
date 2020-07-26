import React, {useEffect} from 'react';
import styled from 'styled-components';
import {
    Hidden,
    BottomNavigation,
    BottomNavigationAction,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import BookIcon from '@material-ui/icons/Book';
import {connect} from 'react-redux';
import { changeHomePageFilter } from '../../actions/homePageFilterActions';
import {
    ALL,
    MOVIES,
    BOOKS,
} from '../../constants/homePageFilterConstants'

const MobileFilters = styled(BottomNavigation)`
    width: 100%;
    position: fixed;
    bottom: 0;
`;

const HomePageMobileFilter = (props: any) => {
    const [storyType, setStoryType] = React.useState<string>('all');
    const handleChange = (event: React.ChangeEvent<{}>, newType: string) => {
        setStoryType(newType);
    };

    useEffect(() => {
        switch (storyType) {
            case 'all':
                //show popular and recommend books and movies
                props.changeHomePageFilter(ALL);
                break;
            case 'movies':
                //show popular and recommend movies
                props.changeHomePageFilter(MOVIES);
                break;
            case 'books':
                //show popular and recommend books
                props.changeHomePageFilter(BOOKS);
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
                aria-label="home-page-filter"
            >
                <BottomNavigationAction
                    label="All"
                    icon={<HomeIcon />}
                    value={'all'}
                />
                <BottomNavigationAction
                    label="Movies"
                    icon={<MovieIcon />}
                    value={'movies'}
                />
                <BottomNavigationAction
                    label="Books"
                    icon={<BookIcon />}
                    value={'books'}
                />
            </MobileFilters>
        </Hidden>
    );
};

export default connect(null, { changeHomePageFilter })(HomePageMobileFilter);