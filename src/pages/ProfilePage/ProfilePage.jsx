import React from 'react';
import useSelector from 'hooks/useSelector';
import { userSelector } from 'models/user/selectors';
import Status from 'pages/ProfilePage/Status';
import Tabs from 'pages/ProfilePage/Tabs';
import UserPhoto from 'pages/ProfilePage/UserPhoto';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from 'constants/routes';
import S from './ProfilePage.styled';
import profilePageRoutes from '../../routes/profilePageRoutes';

const ProfilePage = () => {
  const { uid, status, login, avatarURL } = useSelector(userSelector);

  return (
    <S.Profile>
      <S.UserBlock>
        <S.UserPhotoBlock>
          <UserPhoto avatarURL={avatarURL} uid={uid} />
        </S.UserPhotoBlock>
        <S.UserInfoBlock>
          <S.UserName>
            <S.Text>{login}</S.Text>
          </S.UserName>
          <Status uid={uid} userStatus={status} />
        </S.UserInfoBlock>
        <S.UserActionsBlock />
      </S.UserBlock>
      <S.Content>
        <Tabs />
        <S.UserProfileContent>
          <Switch>
            {profilePageRoutes.map(({ path, exact, component: Component }) => {
              return (
                <Route
                  key={path}
                  exact={exact}
                  path={path}
                  render={props => <Component {...props} />}
                />
              );
            })}
            <Redirect to={routes.profileAbout} />
          </Switch>
        </S.UserProfileContent>
      </S.Content>
    </S.Profile>
  );
};

export default ProfilePage;
