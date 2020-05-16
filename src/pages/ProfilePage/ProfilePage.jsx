import React from 'react';
import useSelector from 'hooks/useSelector';
import { userSelector } from 'models/user/selectors';
import Status from 'pages/ProfilePage/Status';
import Tabs from 'pages/ProfilePage/Tabs';
import UserPhoto from 'pages/ProfilePage/UserPhoto';
import S from './ProfilePage.styled';

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
      <Tabs />
    </S.Profile>
  );
};

export default ProfilePage;
