import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import React, { useState } from 'react';
import { ProfileState } from '../../constants/profileActionTypes';
import Avatar from '@material-ui/core/Avatar';
import EditProfileModal from '../EditProfileModal';

const UserInfoContainer = styled.div`
  flex: 0 1 auto;
  min-width: 300px;
  /* height: 100vh; */
  /* overflow-x: hidden; */
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
  width: 150px;
  &>:first-child {
    border: solid 2px #D3D3D3;
    height: 150px;
  }
`;

const StyledAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    width: 100%;
    height: 100%;
  }
`;

const StyledSectionHeader = styled(Typography)`
  &.MuiTypography-body1 {
    font-weight: bold;
  }
`;

const ActionDiv = styled.div`
  cursor: pointer;
  :hover {
    & .MuiTypography-root {
      text-decoration: underline;
    }
  }
`;

const UserInfo: React.FC<UserInfoProps> = ({ avatar, about, email, booksCount, moviesCount, name/* , openModal */ }) => {
  const [modalOpen, setModalOpen] = useState(true);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <UserInfoContainer id='userinfo'>
        <EditProfileModal isOpen={modalOpen} handleClose={closeModal}/>
      <PhotoContainer id='profile-pic'>
        <div>
          {avatar
            ? <StyledAvatar variant='square'><img alt='profile' src={avatar} width='100%'/></StyledAvatar>
            : <ProfilePicPlaceholder color='disabled' fontSize='large'/>
          }
        </div>
        <ActionDiv onClick={openModal}><Typography align='center' color='primary' variant='body1'>Edit Profile</Typography></ActionDiv>
      </PhotoContainer>
      <div>
        <Typography variant='body2'>{`User Name: ${name}`}</Typography>
        <Typography variant='body2'>{`Books Read: ${booksCount}`}</Typography>
        <Typography variant='body2'>{`Movies Watched: ${moviesCount}`}</Typography>
      </div>
      <div>
        <StyledSectionHeader>About Me/Message User</StyledSectionHeader>
        <Typography variant='body2'>
          {about}
        </Typography>
      </div>
      <div>
        <StyledSectionHeader>Contact</StyledSectionHeader>
        <Typography variant='body2'>{email}</Typography>
      </div>
    </UserInfoContainer>
  );
};

interface UserInfoProps {
  about: string;
  avatar: string;
  booksCount: number;
  email: string;
  moviesCount: number;
  name: string;
  profile?: ProfileState;
}

export default UserInfo;
