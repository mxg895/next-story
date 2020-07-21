import React, {useEffect} from 'react';
import styled from 'styled-components';
import {
    Tab,
    Tabs,
    Hidden,
} from '@material-ui/core'

const DeskTopFilters = styled(Tabs)`
`;

const HomePageDesktopFilter = () => {
    const [storyType, setStoryType] = React.useState<string>('all');
    const handleChange = (event: React.ChangeEvent<{}>, newType: string) => {
        setStoryType(newType);
    };

    useEffect(() => {
        switch (storyType) {
            case 'all':
                //show popular and recommend books and movies
                break;
            case 'movies':
                //show popular and recommend movies
                break;
            case 'books':
                //show popular and recommend books
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
                aria-label="home-page-filter"
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

export default HomePageDesktopFilter;