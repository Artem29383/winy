import { createSlice } from '@reduxjs/toolkit';
import { details } from 'utils/exportDefaultUserData';
import defaultUserPhoto from 'assets/images/defaultUserPhoto.png';
import { removePropFromObject } from 'utils/removePropFromObject';
import { removeArrayElement } from 'utils/removeArrayElement';
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
  totalLikes: 0,
  users: {
    entities: {},
    ids: [],
    lastVisibleObject: {},
    size: 0,
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
    addPost(state, { payload }) {
      state.posts.entities[payload.id] = payload;
      state.posts.ids.unshift(payload.id);
    },
    deletePost(state, { payload }) {
      const id = payload;
      state.posts.entities = removePropFromObject(state.posts.entities, id);
      state.posts.ids = removeArrayElement(state.posts.ids, id);
    },
    setLike(state, { payload }) {
      const { likes, postId, usersWhoLike } = payload;
      state.posts.entities[postId].likes = likes;
      state.posts.entities[postId].usersWhoLike = usersWhoLike;
    },
    updateTotalLikes(state, { payload }) {
      state.totalLikes = payload;
    },
    setUsersInit(state, { payload }) {
      const { entities, ids, lastVisibleObject, size } = payload;
      state.users.entities = { ...state.users.entities, ...entities };
      state.users.ids = [...state.users.ids, ...ids];
      state.users.lastVisibleObject = lastVisibleObject;
      state.users.size = size;
    },
    resetUsers(state) {
      state.users = {
        entities: {},
        ids: [],
        lastVisibleObject: {},
        size: 0,
      };
    },
    setUserAboutContent: state => state,
    checkAuthUser: state => state,
    firebaseUpdateStatus: state => state,
    firebaseUploadAvatarUser: state => state,
    firebaseUploadDetails: state => state,
    firebaseGetUserInfo: state => state,
    firebaseCreateUserPost: state => state,
    firebaseRemoveUserPost: state => state,
    firebaseLikeHandle: state => state,
    firebaseSetTotalLikes: state => state,
    firebaseGetUsers: state => state,
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
  addPost,
  firebaseRemoveUserPost,
  deletePost,
  setLike,
  firebaseLikeHandle,
  firebaseSetTotalLikes,
  updateTotalLikes,
  firebaseGetUsers,
  setUsersInit,
  resetUsers,
} = userReducer.actions;
