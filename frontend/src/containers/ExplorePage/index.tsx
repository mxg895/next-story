import React, {useEffect, useState} from 'react';
import Container from '../Container';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import TagFilter from '../../components/TagFilter';
import axios from 'axios';

const ExplorePage: React.FC = () => {
    return (
        <Container maxWidth='md'>
            <Typography variant={'h1'} gutterBottom>Explore Your Next Story!</Typography>
            <TagFilter />
        </Container>
    );
};

export default ExplorePage;
