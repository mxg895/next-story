import React, {useEffect, useState} from 'react';
import Container from '../Container';
import Typography from '@material-ui/core/Typography';
import ReviewList from '../../components/ReviewList';
import { MediaType } from '../../constants/dataTypes';
import MockCover from '../../assets/MockCover.png';
import styled from 'styled-components';
import {Box, Grid} from '@material-ui/core';
import TagsSection from '../../components/TagsSection';
import StarRater from '../../components/StarRater';
import axios from 'axios';
import {connect} from 'react-redux';
import {loadAllReviewsAction} from '../../actions/reviewRatingActions';

const StyledImage = styled.img`
    width: 100%;
    max-width: 300px;
    margin-bottom: 15px;
`;

const StyledGridItem = styled(Grid)`
    text-align: center;
`;

const VerticallyCenteredDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const CenteredDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

const AddToUserButton = styled.button<{ isAddedToUser: boolean }>`
    background-color: ${({ theme, isAddedToUser }) => isAddedToUser ? theme.palette.grey[300] : theme.palette.primary.light};
    border: none;
    outline: none;
    font-size: 16px;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    margin: 5px;
    color: ${({ isAddedToUser }) => isAddedToUser ? 'black' : 'white'};
`;

const MediaPage: React.FC<{}> = (props: any) => {
    const [mediaType, id] = props.location.pathname.split('/').filter((o: string) => o);
    const [isForLater, setForLater] = useState(false);
    const [isFavorite, setFavorite] = useState(false);
    const [watchedOrRead, setWatchedOrRead] = useState(false);
    const [mediaObject, setMediaObject] = useState({
        title: '',
        id: id,
        mediaType: MediaType.movie,
        image: '',
        people: '',
        genres: [''],
        nextStoryTags: [{ tagId: '', tagName: '' }],
        blurb: '',
        avgRating: 0,
        userRating: 0,
        userHasReviewText: false
    });
    const [userLists, setUserLists] = useState({
        booksRead: [],
        moviesWatched: [],
        watchLater: [],
        readLater: [],
        favoriteMovies: [],
        favoriteBooks: [],
        favoriteAuthors: [],
        favoriteDirectors: []
    });
    const sessionDataString = sessionStorage.getItem('NS-session-data');
    const sessionDataObj = sessionDataString && JSON.parse(sessionDataString);
    const userName = sessionDataObj.username;
    const userId = sessionDataObj.userId;

    const {
        title,
        image,
        people,
        blurb,
        genres,
        nextStoryTags,
        avgRating,
        userRating,
        userHasReviewText
    } = mediaObject;

    const host = window.location.protocol + '//'+ window.location.host;

    useEffect(() => {
        const mediaRouteType = mediaType === MediaType.book ? 'books' : 'movies';
        axios.get(host + `/${mediaRouteType}/${id}`)
            .then((mediaRes: any) => {
                axios.get(host + `/reviewRatings/${mediaType}/${id}`)
                    .then((reviewRatingRes: any) => {
                        const reviews = reviewRatingRes.data.reviewArray;
                        props.loadAllReviewsAction(reviews);
                        const userRatingReviewArr = reviews.filter((r: any) => r.userId === userId);
                        const userRating = userRatingReviewArr.length > 0 ? userRatingReviewArr[0].rating : undefined;
                        const userHasReviewText = userRatingReviewArr.length > 0 && !!userRatingReviewArr[0].text;
                        setMediaObject({
                            title: 'Mock Title Harry Potter',
                            id: 'movie-001',
                            mediaType: MediaType.movie,
                            image: MockCover,
                            people: 'J.K. Rowling',
                            genres: ['fantasy', 'action', 'sci-fi', 'superheroes', 'tag1', 'tag2', 'tag3'],
                            nextStoryTags: mediaRes.data.nextStoryTags,
                            blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            avgRating: reviewRatingRes.data.average,
                            userRating: userRating,
                            userHasReviewText: userHasReviewText
                        });
                    })
                    .catch((error: any) => {
                        console.log('Error getting reviews', error);
                    });
            })
            .catch((error: any) => {
                console.log('Error getting media', error);
            });
        // TODO get the media info from an api call using the media id
    }, [props, id, mediaType]);

    useEffect(() => {
        axios.get(host + `/users/userLists/${userId}`)
            .then((response: any) => {
                const userLists = response.data;
                if (mediaType === MediaType.movie) {
                    if (userLists.watchLater.includes(id)) {
                        setForLater(true);
                    }
                    if (userLists.favoriteMovies.includes(id)) {
                        setFavorite(true);
                    }
                    if (userLists.moviesWatched.includes(id)) {
                        setWatchedOrRead(true);
                    }
                } else {
                    if (userLists.readLater.includes(id)) {
                        setForLater(true);
                    }
                    if (userLists.favoriteBooks.includes(id)) {
                        setFavorite(true);
                    }
                    if (userLists.booksRead.includes(id)) {
                        setWatchedOrRead(true);
                    }
                }
                setUserLists({
                    booksRead: userLists.booksRead,
                    moviesWatched: userLists.moviesWatched,
                    watchLater: userLists.watchLater,
                    readLater: userLists.readLater,
                    favoriteMovies: userLists.favoriteMovies,
                    favoriteBooks: userLists.favoriteBooks,
                    favoriteAuthors: userLists.favoriteAuthors,
                    favoriteDirectors: userLists.favoriteDirectors
                });
            })
            .catch((error: any) => {
                console.log('Error getting media', error);
            });
    }, [userId, mediaType, id]);

    const addOrRemoveCall = (key: string, mediaId: string, action:string) => {
        axios.put(host + `/users/${key}/${mediaId}/${userId}`, {
            action:action
        }).then((response: any) => {
            console.log(response);
        })
            .catch((error: any) => {
                console.log('Error getting reviews', error);
            });
    };

    const addOrRemoveWatchOrRead = (mediaId: string) => {
        const key = mediaType === MediaType.movie ? 'moviesWatched' : 'booksRead';
        if (watchedOrRead) {
            setWatchedOrRead(false);
            addOrRemoveCall(key, mediaId, 'REMOVE');
        } else {
            setWatchedOrRead(true);
            addOrRemoveCall(key, mediaId, 'ADD');
        }
    };

    const addOrRemoveWatchReadLater = (mediaId: string) => {
        console.log('watch or read later, mediaType: ', mediaType, 'id: ', mediaId);
        const key = mediaType === MediaType.movie ? 'watchLater' : 'readLater';
        if (isForLater) {
            setForLater(false);
            addOrRemoveCall(key, mediaId, 'REMOVE');
        } else {
            setForLater(true);
            addOrRemoveCall(key, mediaId, 'ADD');
        }
    };

    const addOrRemoveFavorites = (mediaId: string) => {
        const key = mediaType === MediaType.movie ? 'favoriteMovies' : 'favoriteBooks';
        if (isFavorite) {
            setFavorite(false);
            addOrRemoveCall(key, mediaId, 'REMOVE');
        } else {
            setFavorite(true);
            addOrRemoveCall(key, mediaId, 'ADD');
        }
    };

    return (
        <>
            <Container maxWidth='lg'>
                <Grid container direction={'row'}  spacing={5}>
                    <StyledGridItem item sm={3}>
                        <StyledImage src={image} />
                        <div>
                            Your rating:
                            <CenteredDiv>
                                <StarRater
                                    userRating={userRating}
                                    readonly={false}
                                    userId={userId}
                                    userName={userName}
                                    userHasReviewText={userHasReviewText}
                                    mediaId={id}
                                    mediaType={mediaType}
                                />
                            </CenteredDiv>
                            <div>
                                <AddToUserButton
                                    onClick={() => addOrRemoveWatchOrRead(id)}
                                    isAddedToUser={watchedOrRead}
                                >
                                    {`${watchedOrRead ? 'Remove from' : 'Add to'} ${mediaType === MediaType.movie ? 'watched' : 'read'}`}
                                </AddToUserButton>
                            </div>
                            <div>
                                <AddToUserButton
                                    onClick={() => addOrRemoveWatchReadLater(id)}
                                    isAddedToUser={isForLater}
                                >
                                    {`${isForLater ? 'Remove from' : 'Add to'} ${mediaType === MediaType.movie ? 'watch' : 'read'} later`}
                                </AddToUserButton>
                            </div>
                            <div>
                                <AddToUserButton
                                    onClick={() => addOrRemoveFavorites(id)}
                                    isAddedToUser={isFavorite}
                                >
                                    {isFavorite ? 'Remove favorite' : 'Add favorite'}
                                </AddToUserButton>
                            </div>
                        </div>
                    </StyledGridItem>
                    <Grid item sm={6}>
                        <Typography variant='h1'>{title}</Typography>
                        <Box fontStyle='italic'>
                            <Typography variant='subtitle1' gutterBottom>
                                {people}
                            </Typography>
                        </Box>
                        <VerticallyCenteredDiv>
                            <Typography variant='subtitle2' >Avg rating: </Typography>
                            <StarRater readOnlyRating={avgRating} readonly />
                        </VerticallyCenteredDiv>
                        <Typography variant='body1'>{blurb}</Typography>
                    </Grid>
                    <Grid item sm={3}>
                        Genres:
                        <TagsSection tags={genres}/>
                        Tags:
                        <TagsSection tagObjects={nextStoryTags}/>
                    </Grid>
                </Grid>
            </Container>
            {/*TODO only show CommentEditor to add comments if the user has not submitted before*/}
            <Container maxWidth='md'>
                <ReviewList
                    mediaId={id}
                    mediaType={mediaType}
                    userName={userName}
                    userId={userId}
                    userRating={userRating}
                />
            </Container>
        </>
    );
};

export default connect(null, { loadAllReviewsAction })(MediaPage);
