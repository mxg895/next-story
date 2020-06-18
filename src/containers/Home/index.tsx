import React from 'react';
import Container from '../Container';
import Typography from '@material-ui/core/Typography';
import MultiCardCarousel from '../../components/MulitCardCarousel';

const Home: React.FC = () => {
  return (
    <Container maxWidth='lg'>
        <Typography variant='h1'>Recommendation</Typography>
          <MultiCardCarousel/>
          <br/>
        <Typography variant='h1'>Popular</Typography>
          <MultiCardCarousel/>
    </Container>
  );
};

export default Home;
