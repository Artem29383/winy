import routes from 'constants/routes';
import AuthPage from 'pages/AuthPage';
import RegisterPage from 'pages/RegisterPage';
import HomePage from 'pages/HomePage';
import ResetPasswordPage from 'pages/ResetPasswordPage';
import ProfilePage from 'pages/ProfilePage';

export default [
  {
    path: routes.auth,
    exact: true,
    component: AuthPage,
    isAuth: false,
  },
  {
    path: routes.reset,
    exact: true,
    component: ResetPasswordPage,
    isAuth: false,
  },
  {
    path: routes.register,
    exact: true,
    component: RegisterPage,
    isAuth: false,
  },
  {
    path: routes.home,
    exact: true,
    component: HomePage,
    isAuth: true,
    isAdmin: false,
  },
  {
    path: [
      `${routes.profile}/:id/about`,
      `${routes.profile}/:id/posts`,
      `${routes.profile}/:id`,
    ],
    exact: false,
    component: ProfilePage,
    isAuth: true,
    isAdmin: false,
  },
];
