import routes from 'constants/routes';
import About from 'pages/ProfilePage/About';

export default [
  {
    path: routes.profileAbout,
    exact: true,
    component: About,
    isAuth: true,
    isAdmin: false,
  },
];
