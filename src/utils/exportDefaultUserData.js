import defaultUserPhoto from 'assets/images/defaultUserPhoto.png';

export const details = {
  age: {
    field: 'Age',
    text: '',
  },
  instagram: {
    field: 'Instagram',
    text: '',
  },
  height: {
    field: 'Height',
    text: '',
  },
  language: {
    field: 'Language',
    text: '',
  },
};

export const exportDefaultUserData = data => {
  return {
    isOwner: data.isOwner,
    uid: data.uid,
    login: data.login || '',
    status: data.status || '',
    avatarURL: data.avatarURL || defaultUserPhoto,
    lowAvatarURL: data.lowAvatarURL || defaultUserPhoto,
    onlineStatus: data.onlineStatus,
    last_changed: data.last_changed,
    about: {
      aboutUser: data.htmlContent || '',
      details: { ...details, ...data.details },
    },
    posts: {
      entities: data.posts.entities || {},
      ids: data.posts.ids || [],
    },
    totalLikes: data.totalLikes || 0,
  };
};
