import { ProfileState, SET_PROFILE, UPDATE_PROFILE } from '../constants/profileActionTypes';

export const setProfile = (profile: ProfileState) => {
  return {
    type: SET_PROFILE,
    profile
  };
};

export const updateProfile = (data: Partial<ProfileState>) => {
  return {
    type: UPDATE_PROFILE,
    data
  };
};
