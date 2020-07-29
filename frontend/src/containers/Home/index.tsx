import React from 'react';
import Container from '../Container';
import Typography from '@material-ui/core/Typography';
import PopularMultiCardCarousel from '../../components/PopularMulitCardCarousel';
import RecomendationMultiCardCarousel from '../../components/RecommendationMulitCardCarousel';
import HomePageDesktopFilter from '../../components/DesktopFilter';
import HomePageMobileFilter from '../../components/MobileFilter';

const Home: React.FC = () => {
  return (
    <Container maxWidth='lg'>
        <HomePageDesktopFilter/>
        <Typography variant='h1'>Recommendation</Typography>
          <RecomendationMultiCardCarousel/>
          <br/>
        <Typography variant='h1'>Popular</Typography>
          <PopularMultiCardCarousel/>
        <HomePageMobileFilter/>
    </Container>
  );
};

export default Home;
