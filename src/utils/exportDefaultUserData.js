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

export const exportDefaultUserData = (idTokenResult, data) => {
  return {
    isAuth: true,
    user: {
      isAdmin: idTokenResult.admin || false,
      login: data.login,
      email: idTokenResult.email,
      uid: idTokenResult.user_id,
      status: data.status || '',
      avatarURL: data.avatarURL || defaultUserPhoto,
      online: data.online,
      about: {
        aboutUser: data.htmlContent || '',
        details: { ...details, ...data.details },
      },
    },
  };
};
