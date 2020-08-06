import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import UserInfo from '../../components/UserInfo';
import { useMediaQuery } from '@material-ui/core';
import PageContainer from '../Container';
import RightSection from './RightSection';
import Axios from 'axios';
import { connect } from 'react-redux';
import { setProfile } from '../../actions/profileActions';
import { Dispatch } from 'redux';
import { ProfileState } from '../../constants/profileActionTypes';

const Profile: React.FC<ProfileProps> = ({ profile: { avatar, booksRead, email, message, moviesWatched, name, ...rest }, setProfile }) => {
  const largeScreen = useMediaQuery('(min-width: 960px)');
  const host = window.location.protocol + '//'+ window.location.host;

  const fetchProfile = () => {
    const sessionLogIn = sessionStorage.getItem('NS-session-data');
    const userId = sessionLogIn && JSON.parse(sessionLogIn).userId;
    Axios.get(`${host}/users/${userId}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((err) => {});
  };

  useEffect(fetchProfile, []);

  return (
    <PageContainer maxWidth={largeScreen ? 'lg' : 'sm'}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={5}>
          <UserInfo about={message} avatar={avatar} booksCount={booksRead.length} email={email} moviesCount={moviesWatched.length} name={name} />
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <RightSection {...rest}/>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

interface ProfileProps {
  profile: ProfileState;
  setProfile: (profile: ProfileState) => void;
}

const mapStateToProps = (state: any) => {
  return {
    profile: state.profile
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setProfile: (profile: ProfileState) => dispatch(setProfile(profile))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
