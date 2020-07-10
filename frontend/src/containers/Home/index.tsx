import React from 'react';
import Container from '../Container';
import Typography from '@material-ui/core/Typography';
import MultiCardCarousel from '../../components/MulitCardCarousel';
import HomePageDesktopFilter from '../../components/HomePageDesktopFilter';
import HomePageMobileFilter from '../../components/HomePageMobileFilter';

const Home: React.FC = () => {
  return (
    <Container maxWidth='lg'>
        <HomePageDesktopFilter/>
        <Typography variant='h1'>Recommendation</Typography>
          <MultiCardCarousel/>
          <br/>
        <Typography variant='h1'>Popular</Typography>
          <MultiCardCarousel/>
        <HomePageMobileFilter/>
    </Container>
  );
};

export default Home;
