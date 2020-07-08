import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import UserInfo from '../../components/UserInfo';
import { useMediaQuery } from '@material-ui/core';
import PageContainer from '../Container';
import RightSection from './RightSection';

const ProfileSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledGrid = styled(Grid)`
  flex: 1 1 auto;
`;


// const UserActivityContainer = styled.div`
//   min-width: 300px;
// `;

const Profile: React.FC = () => {
  const isBootstrapMd = useMediaQuery('(min-width: 960px)');

  return (
    <PageContainer maxWidth='lg'>
      {/* <Typography variant='h1'>Profile Page</Typography> */}
      {/* <Grid spacing={1} container> */}
      <ProfileSection>
        <UserInfo />
        {/* TODO?: wrap this in MUI Hidden if we match MUI's breakpoints to that of Bootstrap */}
        {/* { isBootstrapMd && <Container maxWidth='md'>
          <RegWidthCarousel title={`User's favourite books`}/>
          </Container>} */}
        <RightSection />
        {/* </UserActivityContainer> */}
      </ProfileSection>

        {/* <Grid item sm={3} md={6}>
          <div>left side</div>
        </Grid> */}
        {/* <Grid item xs={12} sm={6} md={6}>
          <div>Right side</div>
        </Grid> */}
      {/* </Grid> */}
    </PageContainer>
  );
};

export default Profile;
