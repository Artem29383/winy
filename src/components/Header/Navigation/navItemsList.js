import profile from 'assets/images/profileNav.svg';
import routes from 'constants/routes';
import { NAVLIST_NAME } from 'constants/constants';

export default [
  {
    to: routes.profile,
    svg: profile,
    svgId: 'profileNav',
    text: NAVLIST_NAME.myPage,
  },
  {
    to: routes.home,
    svg: profile,
    svgId: 'profileNav',
    text: NAVLIST_NAME.home,
  },
  {
    to: routes.users,
    svg: profile,
    svgId: 'profileNav',
    text: NAVLIST_NAME.users,
  },
];
