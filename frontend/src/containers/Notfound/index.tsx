import React from 'react';
import Container from '../Container';
import Typography from '@material-ui/core/Typography';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import styled from 'styled-components';

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
            <SentimentVeryDissatisfiedIcon style={{ fontSize: '100px', marginBottom: '20px' }}/>
            <Typography variant='h1'>Page Not Found</Typography>
        </CenteredDiv>
    </Container>
  );
};

export default NotFound;
