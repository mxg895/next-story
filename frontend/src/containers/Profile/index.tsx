import React from 'react';
import Grid from '@material-ui/core/Grid';
import UserInfo from '../../components/UserInfo';
import { useMediaQuery } from '@material-ui/core';
import PageContainer from '../Container';
import RightSection from './RightSection';

const Profile: React.FC = () => {
  const largeScreen = useMediaQuery('(min-width: 960px)');

  return (
    <PageContainer maxWidth={largeScreen ? 'lg' : 'sm'}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={5}>
          <UserInfo />
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <RightSection />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Profile;
