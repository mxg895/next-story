import React from 'react';
import Container from '../Container';
import { Typography } from '@material-ui/core';
import TagFilter from '../../components/TagFilter';

const ExplorePage: React.FC = () => {
    return (
        <Container maxWidth='md'>
            <Typography variant={'h1'} gutterBottom>Explore Your Next Story!</Typography>
            <TagFilter />
        </Container>
    );
};

export default ExplorePage;
