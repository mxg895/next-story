import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

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

interface DeleteAccountModalProps {
  isOpen: boolean;
  userId: string;
  handleClose: () => void;
}

// NOTE: console logs are commented out but kept in code to aid future development & debugging
const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({ isOpen, handleClose, userId }) => {
  const history = useHistory();
  const host = window.location.protocol + '//'+ window.location.host;

  const handleDeleteAccount = async () => {
    try {
      const response = await axios.delete(`${host}/users/${userId}`);
      if (response.data.ok === 0) {
        throw new Error('0 profile deleted');
      }
      sessionStorage.clear();
      history.go(0);
    } catch (error) {
      // console.error('Error deleting account: ', error);
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <StyledDialogTitle disableTypography>
        <StyledContrastText variant='h4'>Edit Profile</StyledContrastText>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
      </StyledDialogTitle>
      <DialogContent dividers>
        <div>
          <Typography variant='body1'>
            Deleting an account is an irreversible action. Once you delete your account, we will not be able to restore you account information. Do you wish to proceed?
          </Typography>
        </div>
        <DialogActions>
            <Button variant='contained' onClick={handleDeleteAccount}>Yes</Button>
            <Button color='primary' variant='contained' onClick={handleClose}>No</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>);
};

const mapStateToProps = (state: any) => {
  return {
    userId: state.profile.userId
  };
};

export default connect(mapStateToProps)(DeleteAccountModal);
