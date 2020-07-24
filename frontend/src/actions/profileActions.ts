import { ProfileState, SET_PROFILE } from '../constants/profileActionTypes';

export const setProfile = (profile: ProfileState) => {
  return {
    type: SET_PROFILE,
    profile
  };
};
