import React, { useMemo } from 'react';
import Container from '../Container';
import Typography from '@material-ui/core/Typography';
import ReviewList from '../../components/ReviewList';
import { MediaType } from '../../constants/dataTypes';
import MockCover from '../../assets/MockCover.png';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const StyledImage = styled.img`
    width: 100%;
`;

const MediaPage: React.FC<{}> = (props: any ) => {
    const { id, mediaType } = props.match.params;
    const { title, image, people, blurb, tags, nextStoryTags } = useMemo(() => {
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
            avgRating: 3
        };
    }, [props]);

    return (
        <Container maxWidth='lg'>
            <Grid container direction={'row'}  spacing={5}>
                <Grid item xs={4}>
                    <StyledImage src={image} />
                </Grid>
                <Grid item xs={4} direction={'column'} alignContent={'space-around'}>
                    <Typography variant='h1' gutterBottom>{title}</Typography>
                    <Typography variant='subtitle1' gutterBottom>{people}</Typography>
                    <Typography variant='body1'>{blurb}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='body1'>{tags}</Typography>
                    <Typography variant='body1'>{nextStoryTags}</Typography>
                </Grid>
            </Grid>
            {/*TODO only show CommentEditor to add comments if the user has not submitted before*/}
            <Container maxWidth='md'>
                <ReviewList mediaId={id} mediaType={mediaType}/>
            </Container>
        </Container>
    );
};

export default MediaPage;
