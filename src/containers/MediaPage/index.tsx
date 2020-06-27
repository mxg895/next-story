import React, { useMemo } from 'react';
import Container from '../Container';
import Typography from '@material-ui/core/Typography';
import ReviewList from '../../components/ReviewList';
import { MediaType } from '../../constants/dataTypes';
import MockCover from '../../assets/MockCover.png';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import TagsSection from '../../components/TagsSection';

const StyledImage = styled.img`
    width: 100%;
    max-width: 300px;
`;

const MediaPage: React.FC<{}> = (props: any ) => {
    const { id, mediaType } = props.match.params;
    const { title, image, people, blurb, tags, nextStoryTags } = useMemo(() => {
        console.log('mediaId: ', id);
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
    }, [id]);
// todo: make grid a column on smaller screens
    return (
        <Container maxWidth='lg'>
            <Grid container direction={'row'}  spacing={5}>
                <Grid item sm={3}>
                    <StyledImage src={image} />
                </Grid>
                <Grid item sm={6}>
                    <Typography variant='h1' gutterBottom>{title}</Typography>
                    <Typography variant='subtitle1' gutterBottom>{people}</Typography>
                    <Typography variant='body1'>{blurb}</Typography>
                </Grid>
                <Grid item sm={3}>
                    Genres:
                    <TagsSection tags={tags}/>
                    Tags:
                    <TagsSection tags={nextStoryTags}/>
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
