import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MultiCardCarousel from '../../components/MulitCardCarousel';
import styled from 'styled-components';

const MarginHeader = styled(Typography)`
    margin-top: 25px;
`;

const Home: React.FC = () => {
  return (
    <Container maxWidth='lg'>
      <MarginHeader variant='h1'>Recommendation</MarginHeader>
        <MultiCardCarousel/>
        <br/>
        <br/>
      <MarginHeader variant='h1'>Popular</MarginHeader>
        <MultiCardCarousel/>
    </Container>
  );
};

export default Home;
