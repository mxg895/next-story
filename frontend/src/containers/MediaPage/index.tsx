import React from 'react';
import Container from '../Container';
import Typography from '@material-ui/core/Typography';
import ReviewList from '../../components/ReviewList';


const MediaPage: React.FC<{}> = () => {
    // get the media info from an api call in a useMemo using the mediaId from match params
    const mediaType = 'movie';
    const mediaId = '000';
    return (
        <Container maxWidth='lg'>
            {/*TODO only show CommentEditor to add comments if the user has not submitted before*/}
            <Container maxWidth='md'>
                <Typography variant='h1'>Title</Typography>
                <Typography variant='h1'>Image</Typography>
                <Typography variant='subtitle1'>people</Typography>
                <Typography variant='body1'>blurb</Typography>
                <Typography variant='body1'>tags</Typography>
                <Typography variant='body1'>next story tags</Typography>
                <br/>
                <ReviewList mediaId={mediaId} mediaType={mediaType}/>
            </Container>
        </Container>
    );
};

export default MediaPage;
