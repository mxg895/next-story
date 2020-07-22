import React, {useEffect, useState} from 'react';
import Container from '../Container';
import axios from 'axios';
import {Box, Typography} from '@material-ui/core';
import styled from 'styled-components';

const host = window.location.protocol + '//'+ window.location.host;

const TagDiv = styled.div<{ last: boolean }>`
    border-top: 2px solid ${({ theme }) => theme.palette.grey[400]};
    border-bottom: ${({ theme, last }) => last && `2px solid ${theme.palette.grey[400]}`};
    min-height: 50px;
    padding: 10px;
`;

const NextStoryTagsPage: React.FC = () => {
    const [allTags, setAllTags] = useState([{ tagId: '', tagName: '', tagDescription: '' }]);

    useEffect(() => {
        axios.get(host + '/nextStoryTags')
            .then((res: any) => {
                const tagData = res.data;
                const sortedTags = tagData.sort(function(a: any, b: any) {
                    if(a.tagName < b.tagName) { return -1; }
                    if(a.tagName > b.tagName) { return 1; }
                    return 0;
                });
                setAllTags(sortedTags);
            })
            .catch((error: any) => {
                console.log('Error getting all tags', error);
            });
    }, []);

    return (
        <Container maxWidth='md'>
            <Typography variant={'h1'} gutterBottom>All our story tags!</Typography>
            <Typography variant={'h3'} color={'primary'} gutterBottom>
                Use these tags to filter stories, or add them to stories yourself
            </Typography>
            {allTags.map((t, index) => {
                return (
                    <TagDiv key={index} last={index + 1 === allTags.length}>
                        <Box fontWeight={'fontWeightBold'} fontSize={24} mb={1}>{t.tagName}</Box>
                        <Typography>{t.tagDescription}</Typography>
                    </TagDiv>
                );
            })}
        </Container>
    );
};

export default NextStoryTagsPage;
