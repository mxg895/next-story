import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { ProfileState } from '../../constants/profileActionTypes';
import EditProfileModal from '../EditProfileModal';
import ProfilePhotoDisplay from '../ProfilePhotoDisplay';

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

const PhotoContainer = styled.div`
  width: 150px;
  &>:first-child {
    border: solid 1px #D3D3D3;
    height: 150px;
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
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <UserInfoContainer id='userinfo'>
        <EditProfileModal isOpen={modalOpen} handleClose={closeModal}/>
      <PhotoContainer>
        <ProfilePhotoDisplay avatar={avatar}/>
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
