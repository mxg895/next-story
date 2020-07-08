import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import React from 'react';

const UserInfoContainer = styled.div`
  flex: 0 1 auto;
  min-width: 300px;
  max-width: 400px;
  height: 100vh;
  overflow-x: hidden;
  /* overflow-y: auto; */
  & > * {
    margin-bottom: 10px;
  }
`;

const ProfilePicPlaceholder = styled(AccountBoxIcon)`
  &.MuiSvgIcon-root {
    width: 100%;
    height: 100%;
  }
`;

const PhotoContainer = styled.div`
  /* margin-bottom: 5px; */
  width: 150px;
  /* height: 150px; */
  &>:first-child {
    border: solid 2px #D3D3D3;
    height: 150px;
  }
`;

const StyledSectionHeader = styled(Typography)`
  &.MuiTypography-body1 {
    font-weight: bold;
  }
`;

const UserSummary = styled.div``;

const UserInfo: React.FC<{}> = () => {
  return (
    <UserInfoContainer id='userinfo'>
      <PhotoContainer id='profile-pic'>
        <div>
          <ProfilePicPlaceholder color='disabled' fontSize='large'/>
        </div>
        <Typography align='center' color='primary' variant='body1'>(Edit Profile)</Typography>
      </PhotoContainer>
      <UserSummary>
        <Typography variant='body2'>User Name: Name Here</Typography>
        <Typography variant='body2'>Books Read: 20</Typography>
        <Typography variant='body2'>Movies Watched 10</Typography>
      </UserSummary>
      <div>
        <StyledSectionHeader>About Me/Message User</StyledSectionHeader>
        <Typography variant='body2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Quis auctor elit sed vulputate. Lobortis elementum nibh tellus molestie nunc non blandit massa. Aliquam purus sit amet luctus venenatis lectus magna. Ac felis donec et odio pellentesque. Etiam erat velit scelerisque in dictum. Ridiculus mus mauris vitae ultricies leo integer malesuada. Sed pulvinar proin gravida hendrerit lectus. Faucibus interdum posuere lorem ipsum dolor.
        </Typography>
      </div>
      <div>
        <StyledSectionHeader>Contact</StyledSectionHeader>
        <Typography variant='body2'>Contact Placeholder</Typography>
      </div>
    </UserInfoContainer>
  );
};

export default UserInfo;
