import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const StyledAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    width: 100%;
    height: 100%;
  }
`;

const ProfilePicPlaceholder = styled(AccountBoxIcon)`
  &.MuiSvgIcon-root {
    width: 100%;
    height: 100%;
  }
`;

interface ProfilePhotoDisplayProps {
  avatar: string;
}

const ProfilePhotoDisplay: React.FC<ProfilePhotoDisplayProps> = ({ avatar }) => {
  return (
    <div>
      {avatar
        ? <StyledAvatar variant='square'><img alt='profile' src={avatar} width='100%'/></StyledAvatar>
        : <ProfilePicPlaceholder color='disabled' fontSize='large'/>
      }
  </div>
  );
};

export default ProfilePhotoDisplay;
