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

const WatchReadButton = styled.button<{ isForLater: boolean }>`
    background-color: ${({ theme, isForLater }) => isForLater ? theme.palette.grey[300] : theme.palette.primary.light};
    border: none;
    outline: none;
    font-size: 16px;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    color: ${({ isForLater }) => isForLater ? 'black' : 'white'};
`;

const MediaPage: React.FC<{}> = (props: any) => {
    const { id, mediaType } = props.match.params;
    const [isForLater, setForLater] = useState(false);
    const [mediaObject, setMediaObject] = useState({
        title: '',
        id: id,
        mediaType: MediaType.movie,
        image: '',
        people: '',
        genres: [''],
        nextStoryTags: [{ tagId: '', tagName: '' }],
        blurb: '',
        avgRating: undefined,
        userRating: undefined
    });
    const userId = 'user-000'; // get userId from redux
    const { title, image, people, blurb, genres, nextStoryTags, avgRating, userRating } = mediaObject;

    useEffect(() => {
        const mediaRouteType = mediaType === MediaType.book ? 'books' : 'movies';
        axios.get(`http://localhost:9000/${mediaRouteType}/${id}`)
        .then((res: any) => {
            const data = res.data;
            const userRatingArr = data.ratingReviews.ratingsAndReviews.filter((r: any) => r.userId === userId);
            const userRating = userRatingArr.length > 0 ? userRatingArr[0].rating : undefined;
            setMediaObject({
                title: 'Mock Title Harry Potter',
                id: 'movie-001',
                mediaType: MediaType.movie,
                image: MockCover,
                people: 'J.K. Rowling',
                genres: ['fantasy', 'action', 'sci-fi', 'superheroes', 'tag1', 'tag2', 'tag3'],
                nextStoryTags: data.nextStoryTags,
                blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                avgRating: data.ratingReviews.average,
                userRating: userRating
            });
        })
        .catch((error: any) => {
            console.log('Error on getting media', error);
        });
        // TODO get the media info from an api call using the media id
    }, [id, mediaType]);

    useEffect(() => {
        // todo get if this media is on the user's watch/read later list and set the state
    }, [id]);

    const addOrRemoveWatchReadLater = (mediaType: MediaType, mediaId: string) => {
        console.log('watch or read later, mediaType: ', mediaType, 'id: ', mediaId);
        if (isForLater) {
            setForLater(false);
            // todo remove from watch later in mongodb and maybe redux
        } else {
            setForLater(true);
            // todo add to watch later in mongodb and maybe redux
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
                                <StarRater userRating={userRating} readonly={false}/>
                            </CenteredDiv>
                            <WatchReadButton onClick={() => addOrRemoveWatchReadLater(mediaType, id)} isForLater={isForLater}>
                                {`${isForLater ? 'Remove from' : 'Add to'} ${mediaType === MediaType.movie ? 'watch' : 'read'} later`}
                            </WatchReadButton>
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
                            <StarRater readOnlyRating={avgRating} readonly/>
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
                <ReviewList mediaId={id} mediaType={mediaType}/>
            </Container>
        </>
    );
};

export default MediaPage;
