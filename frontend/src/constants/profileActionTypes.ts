import { Tag } from './dataTypes';

export interface ProfileState {
  avatar: string;
  booksRead: Array<string>
  email: string;
  encrypted: string;
  favoriteAuthors: string;
  favoriteBooks: Array<string>;
  favoriteDirectors: Array<string>;
  favoriteGenres: Array<string>;
  favoriteMovies: Array<string>;
  favoriteNextStoryTags: Array<Tag>;
  message: string;
  moviesWatched: Array<string>;
  name: string;
  readLater: Array<string>;
  type: string;
  userId: string;
  watchLater: Array<string>;
  _id: string;
}

export const SET_PROFILE = 'SET_PROFILE';

interface SetProfileAction {
  type: typeof SET_PROFILE;
  profile: ProfileState;
}

export type ProfileActionTypes = SetProfileAction;
