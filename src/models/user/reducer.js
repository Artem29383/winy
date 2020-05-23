import { createSlice } from '@reduxjs/toolkit';
import { details } from 'utils/exportDefaultUserData';
import defaultUserPhoto from 'assets/images/defaultUserPhoto.png';
/* eslint-disable no-param-reassign */

/** *
 *
 * @type {
 * {
 * uid: null, isOwner: boolean, avatarURL, lowAvatarURL, onlineStatus: boolean, about: {details: {language: {field: string, text: string}, instagram: {field: string, text: string}, age: {field: string, text: string}, height: {field: string, text: string}}, aboutUser: string}, login: null, posts: {entities: {}, ids: []}, status: string, last_changed: null}}
 * post: {
 *   id: string,
 *   postsPhoto: [],
 *   content: string
 * }
 */

const initialState = {
  isOwner: false,
  login: null,
  uid: null,
  status: '',
  avatarURL: defaultUserPhoto,
  onlineStatus: false,
  last_changed: null,
  lowAvatarURL: defaultUserPhoto,
  about: {
    aboutUser: '',
    details,
  },
  posts: {
    entities: {},
    ids: [],
  },
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser(state) {
      Object.assign(state, initialState);
    },
    setUserInfo(state, { payload }) {
      Object.assign(state, payload);
    },
    updateStatus(state, { payload }) {
      state.status = payload;
    },
    setNewAvatar(state, { payload }) {
      const { url, lowUrl } = payload;
      state.avatarURL = url;
      state.lowAvatarURL = lowUrl;
    },
    setUserContent(state, { payload }) {
      state.about.aboutUser = payload;
    },
    setUserDetails(state, { payload }) {
      const { id, field, text } = payload;
      state.about.details[id] = { field, text };
    },
    setUserAboutContent: state => state,
    checkAuthUser: state => state,
    firebaseUpdateStatus: state => state,
    firebaseUploadAvatarUser: state => state,
    firebaseUploadDetails: state => state,
    firebaseGetUserInfo: state => state,
    firebaseCreateUserPost: state => state,
  },
});

export default userReducer.reducer;
export const {
  firebaseCreateUserPost,
  setUserAboutContent,
  setUserContent,
  updateStatus,
  firebaseUpdateStatus,
  firebaseUploadAvatarUser,
  setNewAvatar,
  firebaseUploadDetails,
  setUserDetails,
  resetUser,
  firebaseGetUserInfo,
  setUserInfo,
} = userReducer.actions;
