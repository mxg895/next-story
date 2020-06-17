import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

interface MediaPageProps {
    title: string,
}

const MediaPage: React.FC<MediaPageProps> = (props: MediaPageProps) => {
    return (
        <Container>
            <Typography variant='h3'>Media Page</Typography>
        </Container>
    );
};

export default MediaPage;
