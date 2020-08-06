import React, { useState, useEffect } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import InsertPhoto from '@material-ui/icons/InsertPhoto';
import DialogContent from '@material-ui/core/DialogContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { updateProfile } from '../../actions/profileActions';
import { ProfileState } from '../../constants/profileActionTypes';
import ProfilePhotoDisplay from '../ProfilePhotoDisplay';

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

const PhotoContainer = styled.div`
  width: 150px;
  &>:first-child {
    border: solid 1px #D3D3D3;
    height: 150px;
    margin-bottom: 10px;
  }
  margin: 0 auto 10px auto;
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

const HiddenFileInput = styled.input`
  display: none;
`;

interface EditProfileModalProps {
  aboutMe: string;
  id: string;
  isOpen: boolean;
  photo: string;
  handleClose: () => void;
  updateProfile: (profileData: Partial<ProfileState>) => void;
}

const IMG_RATIO = 1;

const EditProfileModal: React.FC<EditProfileModalProps> = ({ aboutMe = '', photo, isOpen, id, handleClose, updateProfile }) => {
  const host = window.location.protocol + '//'+ window.location.host;

  const [aboutMeText, setAboutMeText] = useState(aboutMe);
  const [avatarSrc, setAvatarSrc] = useState(photo);
  const [fileError, setFileError] = useState('');

  const changeAboutMe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAboutMeText(e.target.value);
  };

  const closeModal = () => {
    handleCancelChange();
    handleClose();
  };

  const handleCancelChange = () => {
    setFileError('');
    setAvatarSrc(photo);
    setAboutMeText(aboutMe);
  };

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file= e.target.files?.[0];

    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const inputImg = new Image();
      inputImg.onload = () => {
        const canvas = document.createElement('canvas');

        const inputImgWidth = inputImg.naturalWidth;
        const inputImgHeight = inputImg.naturalHeight;
        const imgRatio = inputImgWidth/inputImgHeight;

        let drawWidth = inputImgWidth;
        let drawHeight = inputImgHeight;

        if (imgRatio > IMG_RATIO) {
          drawWidth = inputImgHeight * IMG_RATIO;
        } else {
          drawHeight = inputImgWidth/IMG_RATIO;
        }

        const dx = Math.round((drawWidth - inputImgWidth)/2);
        const dy = Math.round((drawHeight - inputImgHeight)/2);

        canvas.width = drawWidth;
        canvas.height = drawHeight;

        const ctx = canvas.getContext('2d');
        ctx?.drawImage(inputImg, dx, dy);
        const dataurl = canvas.toDataURL('image/jpeg');
        setAvatarSrc(dataurl);
      };
      inputImg.src = (e?.target?.result || '') as string;
    };
    if (file){
      const fileSize = parseFloat(((file.size/1024)/1024)?.toFixed(4)); // to MB
      if (fileSize > 8) {
        setFileError('File size exceeds 8Mb');
      } else {
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fileError) {
      try {
        const response = await axios.put(`${host}/users/edit/${id}`, { message: aboutMeText, avatar: avatarSrc });
        updateProfile(response.data);
        handleClose();
      } catch (error) {}
    }
  };

  useEffect(() => {
    setAboutMeText(aboutMe);
  }, [aboutMe]);

  useEffect(() => {
    setAvatarSrc(photo);
  }, [photo]);

  return (
    <Dialog open={isOpen} onClose={closeModal}>
      <StyledDialogTitle disableTypography >
        <StyledContrastText variant='h4'>Edit Profile</StyledContrastText>
        <CloseButton onClick={closeModal}>
          <CloseIcon />
        </CloseButton>
      </StyledDialogTitle>
      <DialogContent dividers>
        <form onSubmit={(e) => handleSubmit(e)}>
          <PhotoContainer>
            <ProfilePhotoDisplay avatar={avatarSrc}/>
            <HiddenFileInput accept='.png, .jpg, .jpeg' id='upload-file-input' type='file' onChange={handlePhotoChange}/>
            <label htmlFor='upload-file-input'>
              <Button component='span' startIcon={<InsertPhoto />} variant='contained'>Upload</Button>
            </label>
            {fileError && <Typography variant='subtitle2' color='error'>{fileError}</Typography>}
          </PhotoContainer>
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
