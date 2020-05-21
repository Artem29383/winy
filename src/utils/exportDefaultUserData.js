import defaultUserPhoto from 'assets/images/defaultUserPhoto.png';

export const details = {
  lastOnline: {
    field: 'Last Online',
    text: '',
  },
  orientation: {
    field: 'Orientation',
    text: '',
  },
  ethnicity: {
    field: 'Ethnicity',
    text: '',
  },
  height: {
    field: 'Height',
    text: '',
  },
  bodyType: {
    field: 'BodyType',
    text: '',
  },
  diet: {
    field: 'Diet',
    text: '',
  },
  smokes: {
    field: 'Smokes',
    text: '',
  },
};

export const exportDefaultUserData = data => {
  return {
    user: {
      uid: data.uid,
      login: data.login || '',
      status: data.status || '',
      avatarURL: data.avatarURL || defaultUserPhoto,
      onlineStatus: data.onlineStatus,
      last_changed: data.last_changed,
      about: {
        aboutUser: data.htmlContent || '',
        details: { ...details, ...data.details },
      },
    },
  };
};
