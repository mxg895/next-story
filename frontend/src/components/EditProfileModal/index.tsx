import React, { useState, useEffect } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import DialogContent from '@material-ui/core/DialogContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Dispatch } from 'redux';
import { ProfileState } from '../../constants/profileActionTypes';
import { updateProfile } from '../../actions/profileActions';

const StyledDialogTitle = styled(DialogTitle)`
  display: inline-flex;
  align-items: center;
  background-color: #3f51b5;
`;

const StyledContrastText = styled(Typography)`
  color: #ffffff;
`;

const CloseButton = styled(IconButton)`
  &.MuiButtonBase-root {
    position: absolute;
    color: #ffffff;
  }
  right: 5px;
`;

const InputLabel = styled(FormControlLabel)`
  &.MuiFormControlLabel-root {
    align-items: flex-start;
    margin-left: 0;
    margin-right: 0;
  }
  & > div {
    min-width: 300px;
  }
`;

interface EditProfileModalProps {
  aboutMe: string;
  id: string;
  isOpen: boolean;
  photo: string;
  handleClose: () => void;
  updateProfile: (profileData: Partial<ProfileState>) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ aboutMe = '', photo, isOpen, id, handleClose, updateProfile }) => {
  const host = window.location.protocol + '//'+ window.location.host;

  const [aboutMeText, setAboutMeText] = useState(aboutMe);
  const [avatarSrc, setAvatarSrc] = useState(undefined);

  const changeAboutMe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAboutMeText(e.target.value);
  };

  const handleCancelChange = () => {
    setAboutMeText(aboutMe);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${host}/users/edit/${id}`, { message: aboutMeText, avatar: avatarSrc });
      updateProfile(response.data);
      handleClose();
    } catch (error) {
      console.error('error submitting the updated profile: ', error);
    }
  };

  useEffect(() => {
    setAboutMeText(aboutMe);
  }, [aboutMe]);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <StyledDialogTitle disableTypography >
        <StyledContrastText variant='h4'>Edit Profile</StyledContrastText>
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
      </StyledDialogTitle>
      <DialogContent dividers>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputLabel
            control={<OutlinedInput multiline rows={4} value={aboutMeText} onChange={changeAboutMe}/>}
            label='About Me'
            labelPlacement='top'
          />
          <DialogActions>
            <Button variant='contained' onClick={handleCancelChange}>Cancel</Button>
            <Button color='primary' variant='contained' type='submit'>Submit</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>);
};

const mapStateToProps = (state: any) => {
  return {
    aboutMe: state.profile?.message,
    photo: state.profile?.avatar,
    id: state.profile?._id
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateProfile: (updatedData: Partial<ProfileState>) => dispatch(updateProfile(updatedData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileModal);
