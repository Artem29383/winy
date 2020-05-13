export const exportDefaultUserData = (idTokenResult, data) => {
  return {
    isAuth: true,
    isAdmin: idTokenResult.admin,
    login: data.login,
    email: idTokenResult.email,
    uid: idTokenResult.user_id,
  };
};
