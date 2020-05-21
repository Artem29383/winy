import { createSlice } from '@reduxjs/toolkit';
import { details } from 'utils/exportDefaultUserData';
import defaultUserPhoto from 'assets/images/defaultUserPhoto.png';
/* eslint-disable no-param-reassign */

const initialState = {
  login: null,
  uid: null,
  status: '',
  avatarURL: defaultUserPhoto,
  onlineStatus: false,
  last_changed: null,
  about: {
    aboutUser: '',
    details,
  },
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser(state) {
      Object.assign(state, initialState);
    },
    updateStatus(state, { payload }) {
      state.status = payload;
    },
    setNewAvatar(state, { payload }) {
      state.avatarURL = payload;
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
  },
});

export default userReducer.reducer;
export const {
  setUserAboutContent,
  setUserContent,
  updateStatus,
  firebaseUpdateStatus,
  firebaseUploadAvatarUser,
  setNewAvatar,
  firebaseUploadDetails,
  setUserDetails,
  resetUser,
} = userReducer.actions;
