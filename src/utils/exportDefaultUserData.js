import defaultUserPhoto from 'assets/images/defaultUserPhoto.png';

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
    },
  };
};
