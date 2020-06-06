import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import UserInfo from '../../components/UserInfo';

const StyledContainer = styled(Container)`
  padding-top: 80px;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const UserActivityContainer = styled.div`
  min-width: 300px;
`;

const Profile: React.FC = () => {
  return (
    <StyledContainer maxWidth='lg'>
      {/* <Typography variant='h1'>Profile Page</Typography> */}
      {/* <Grid spacing={1} container> */}
      <ProfileSection>
        <UserInfo />
        <UserActivityContainer>user activity</UserActivityContainer>
      </ProfileSection>

        {/* <Grid item sm={3} md={6}>
          <div>left side</div>
        </Grid> */}
        {/* <Grid item xs={12} sm={6} md={6}>
          <div>Right side</div>
        </Grid> */}
      {/* </Grid> */}
    </StyledContainer>
  );
};

export default Profile;
