import React, { useEffect, useState } from 'react';
import useSelector from 'hooks/useSelector';
import { userSelector } from 'models/user/selectors';
import Status from 'pages/ProfilePage/Status';
import Tabs from 'pages/ProfilePage/Tabs';
import UserPhoto from 'pages/ProfilePage/UserPhoto';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';
import CommonLoader from 'components/CommonLoader';
import useAction from 'hooks/useAction';
import { firebaseGetUserInfo, resetUser } from 'models/user/reducer';
import Online from 'components/Online';
import routes from 'constants/routes';
import S from './ProfilePage.styled';
import profilePageRoutes from '../../routes/profilePageRoutes';

const ProfilePage = () => {
  const [isLoad, setIsLoading] = useState(true);
  const {
    uid,
    status,
    login,
    avatarURL,
    about,
    isOwner,
    onlineStatus,
    lowAvatarURL,
  } = useSelector(userSelector);
  const getInfoUser = useAction(firebaseGetUserInfo);
  const userId = useParams().id;
  const resetUserData = useAction(resetUser);

  useEffect(() => {
    if (uid) {
      setIsLoading(false);
    }
  }, [uid]);

  useEffect(() => {
    setIsLoading(true);
    getInfoUser(userId);
    return () => resetUserData();
  }, [userId]);

  if (isLoad) return <CommonLoader />;

  return (
    <S.Profile>
      <S.UserBlock>
        <S.UserPhotoBlock>
          <UserPhoto avatarURL={avatarURL} uid={uid} isOwner={isOwner} />
        </S.UserPhotoBlock>
        <S.UserInfoBlock>
          <S.UserName>
            <S.Text>{login}</S.Text>
            <Online isOnline={onlineStatus} />
          </S.UserName>
          <Status uid={uid} userStatus={status} isOwner={isOwner} />
        </S.UserInfoBlock>
      </S.UserBlock>
      <S.Content>
        <Tabs uid={userId} />
        <S.UserProfileContent>
          <Switch>
            {profilePageRoutes.map(({ path, exact, component: Component }) => {
              return (
                <Route
                  key={path}
                  exact={exact}
                  path={path}
                  render={props => (
                    <Component
                      {...props}
                      about={about}
                      isOwner={isOwner}
                      lowAvatarURL={lowAvatarURL}
                    />
                  )}
                />
              );
            })}
            <Redirect to={`${routes.profile}/${userId}${routes.about}`} />
          </Switch>
        </S.UserProfileContent>
      </S.Content>
    </S.Profile>
  );
};

export default ProfilePage;
