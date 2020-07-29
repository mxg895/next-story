import React, {useEffect, useState} from 'react';
import Container from '../Container';
import axios from 'axios';
import {Box, Link, Typography} from '@material-ui/core';
import styled from 'styled-components';
import AddToUserButton from '../../components/AddToUserButton';
import {useHistory} from 'react-router';

const TagDiv = styled.div<{ last: boolean }>`
    border-top: 2px solid ${({ theme }) => theme.palette.grey[400]};
    border-bottom: ${({ theme, last }) => last && `2px solid ${theme.palette.grey[400]}`};
    min-height: 50px;
    padding: 10px;
`;

const StyledLink = styled(Link)`
    &:hover {
        cursor: pointer;
    }
`;

const NextStoryTagsPage: React.FC = () => {
    const [allTags, setAllTags] = useState<Array<{ tagId: string, tagName: string, tagDescription: string }>>([]);
    const [userFavTags, setUserFavTags] = useState<Array<string>>([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('/nextStoryTags')
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

    useEffect(() => {
        const sessionDataString = sessionStorage.getItem('NS-session-data');
        const sessionDataObj = sessionDataString && JSON.parse(sessionDataString);
        const userId = sessionDataObj?.userId;
        axios.get(`/users/favoriteNSTags/${userId}`)
            .then((res: any) => {
                const userFavTags = res.data;
                const userFavTagIds = userFavTags.map((t: any) => t.tagId);
                setUserFavTags(userFavTagIds);
            })
            .catch((error: any) => {
                console.log('Error getting all tags', error);
            });
    }, []);

    const addOrRemoveTagFromFavorites = (tag: any, shouldRemove: boolean) => {
        const sessionDataString = sessionStorage.getItem('NS-session-data');
        const sessionDataObj = sessionDataString && JSON.parse(sessionDataString);
        const userId = sessionDataObj?.userId;
        axios.put(`/users/favoriteNSTags/putToFavorites/${userId}/${shouldRemove}`, {tag: tag})
            .then((res: any) => {
                console.log(res.data);
            })
            .catch((error: any) => {
                console.log('Error getting all tags', error);
            });
    };

    const goToSingleQuery = (tagId: string) => {
        history.push(`/searchResult/param?singleQueryType=tag&query=${tagId}`);
    };

    return (
        <Container maxWidth='md'>
            <Typography variant={'h1'} gutterBottom>All our story tags!</Typography>
            <Typography variant={'h3'} color={'primary'} gutterBottom>
                Use these tags to filter stories, or add them to stories yourself
            </Typography>
            {allTags.map((t: any, index) => {
                const isAFavTag = userFavTags.filter((tag: any) => {
                    return t.tagId === tag;
                }).length > 0;
                const shouldRemoveOnClick = isAFavTag;
                return (
                    <TagDiv key={index} last={index + 1 === allTags.length}>
                        <Box
                            fontWeight={'fontWeightBold'}
                            fontSize={24}
                            mb={1}
                            display={'flex'}
                            justifyContent={'space-between'}
                        >
                            <StyledLink color={'textPrimary'} onClick={() => goToSingleQuery(t.tagId)}>
                                {t.tagName}
                            </StyledLink>
                            <AddToUserButton
                                addLabel={'Add to favorites'}
                                removeLabel={'Remove from favorites'}
                                isAdded={isAFavTag}
                                toBackendOnClick={() => addOrRemoveTagFromFavorites(t, shouldRemoveOnClick)}
                            />
                        </Box>
                        <Typography>{t.tagDescription}</Typography>
                    </TagDiv>
                );
            })}
        </Container>
    );
};

export default NextStoryTagsPage;
