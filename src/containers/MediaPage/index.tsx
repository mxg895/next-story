import React, {useEffect, useMemo, useState} from 'react';
import Container from '../Container';
import Typography from '@material-ui/core/Typography';
import ReviewList from '../../components/ReviewList';
import { MediaType } from '../../constants/dataTypes';
import MockCover from '../../assets/MockCover.png';
import styled from 'styled-components';
import {Box, Grid} from '@material-ui/core';
import TagsSection from '../../components/TagsSection';
import StarRater from '../../components/StarRater';

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

const MediaPage: React.FC<{}> = (props: any ) => {
    const [isForLater, setForLater] = useState(false);
    const { id, mediaType } = props.match.params;
    const { title, image, people, blurb, tags, nextStoryTags, avgRating } = useMemo(() => {
        // TODO get the media info from an api call using the media id
        return {
            title: 'Mock Title Harry Potter',
            id: '000',
            mediaType: MediaType.movie,
            image: MockCover,
            people: 'J.K. Rowling',
            tags: ['fantasy', 'action', 'sci-fi', 'superheroes', 'tag1', 'tag2', 'tag3'],
            nextStoryTags: ['cliffhangers', 'sad ending'],
            blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            avgRating: 3.531351513
        };
    }, [id]);

    useEffect(() => {
        // todo get if this media is on the user's watch/read later list and set the state
    }, [id]);

    const userRating = useMemo(() => {
        // TODO get the user's rating from an api call using the media id and user id
        return 4;
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
                                <StarRater userRating={userRating}/>
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
                            <StarRater avgRating={avgRating}/>
                        </VerticallyCenteredDiv>
                        <Typography variant='body1'>{blurb}</Typography>
                    </Grid>
                    <Grid item sm={3}>
                        Genres:
                        <TagsSection tags={tags}/>
                        Tags:
                        <TagsSection tags={nextStoryTags}/>
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
