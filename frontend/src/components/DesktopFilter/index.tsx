import React, {useEffect} from 'react';
import styled from 'styled-components';
import {
    Tab,
    Tabs,
    Hidden
} from '@material-ui/core';
import {connect} from 'react-redux';
import { changeHomePageFilter } from '../../actions/homePageFilterActions';
import {
    ALL,
    MOVIES,
    BOOKS
} from '../../constants/homePageFilterConstants';
import {changeSingleSearchPageFilter} from '../../actions/singleSearchPageFilterActions';

const DeskTopFilters = styled(Tabs)`
`;

const DesktopFilter = (props: any) => {
    const { singleSearchPageFilter, isSearchPage } = props;
    const [storyType, setStoryType] = React.useState<string>('all');
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
        <Hidden smDown>
            <DeskTopFilters
                value={storyType}
                onChange={handleChange}
                aria-label='home-page-filter'
                centered
            >
                <Tab
                    component='a'
                    label='All'
                    value={'all'}
                />
                <Tab
                    component='a'
                    label='Movies'
                    value={'movies'}
                />
                <Tab
                    component='a'
                    label='Books'
                    value={'books'}
                />
            </DeskTopFilters>
        </Hidden>
    );
};

const mapStateToProps = (state: any) => {
    return {
        singleSearchPageFilter: state.singleSearchPageFilterReducer
    };
};

export default connect(mapStateToProps, { changeHomePageFilter, changeSingleSearchPageFilter })(DesktopFilter);
