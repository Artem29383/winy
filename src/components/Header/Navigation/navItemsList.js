import profile from 'assets/images/profileNav.svg';
import routes from 'constants/routes';

export default [
  {
    to: routes.profile,
    svg: profile,
    svgId: 'profileNav',
    text: 'Profile',
  },
  {
    to: routes.home,
    svg: profile,
    svgId: 'profileNav',
    text: 'Home',
  },
];
