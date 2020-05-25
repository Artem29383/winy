import routes from 'constants/routes';
import About from 'pages/ProfilePage/About';
import Posts from 'pages/ProfilePage/Posts';

export default [
  {
    path: `${routes.profile}/:id${routes.about}`,
    exact: true,
    component: About,
    isAuth: true,
    isAdmin: false,
  },
  {
    path: `${routes.profile}/:id${routes.posts}`,
    exact: true,
    component: Posts,
    isAuth: true,
    isAdmin: false,
  },
];
