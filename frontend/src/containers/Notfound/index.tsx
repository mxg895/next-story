import React from 'react';
import Container from '../Container';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import BookAndMovie from '../../assets/BookAndMovie.png';

// height calculated to take into account the margins on the Container component
const CenteredDiv = styled.div`
    width: 100%;
    height: calc(100vh - 170px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const NotFound: React.FC = () => {
  return (
    <Container maxWidth='md'>
        <CenteredDiv>
            <img src={BookAndMovie} style={{ height: '300px', marginBottom: '20px' }}/>
            <Typography variant='h1'>404</Typography>
            <Typography variant='h1'>Page Not Found</Typography>
        </CenteredDiv>
    </Container>
  );
};

export default NotFound;
