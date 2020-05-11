import routes from 'constants/routes';
import AuthPage from 'pages/AuthPage';
import RegisterPage from 'pages/RegisterPage';
import HomePage from 'pages/HomePage';

export default [
  {
    path: routes.auth,
    exact: true,
    component: AuthPage,
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
];
