import React from 'react';
import defaultUserPhoto from 'assets/images/defaultUserPhoto.png';
import Button from 'components/Button';
import useSelector from 'hooks/useSelector';
import { userSelector } from 'models/user/selectors';
import Status from 'pages/ProfilePage/Status';
import Tabs from 'pages/ProfilePage/Tabs';
import S from './ProfilePage.styled';

const ProfilePage = () => {
  const { uid, status, login } = useSelector(userSelector);

  return (
    <S.Profile>
      <S.UserBlock>
        <S.UserPhotoBlock>
          <S.Photo>
            <S.Img src={defaultUserPhoto} />
            <S.UpdateUserInfo>
              <Button>Update Info</Button>
            </S.UpdateUserInfo>
          </S.Photo>
        </S.UserPhotoBlock>
        <S.UserInfoBlock>
          <S.UserName>
            <S.Text>{login}</S.Text>
          </S.UserName>
          <Status uid={uid} userStatus={status || ''} />
        </S.UserInfoBlock>
        <S.UserActionsBlock />
      </S.UserBlock>
      <Tabs />
    </S.Profile>
  );
};

export default ProfilePage;
