import React, { useState } from 'react';
import malePhoto from 'assets/images/defaultUserPhoto.png';
import SettingButton from 'components/SettingButton';
import useToggle from 'hooks/useToggle';
import Navigation from 'components/Header/Navigation';
import S from './Header.styled';

const Header = () => {
  const [isHideNav, setIsHideNav] = useToggle(false);
  const [isAnimBurg, setIsAnimBurg] = useState(false);

  const animClick = () => {
    setIsAnimBurg(true);
    setIsHideNav();
  };

  return (
    <S.NavigatorBlock isHide={isHideNav} width={isHideNav ? '55px' : '270px'}>
      <S.NavigatorHeader isHide={isHideNav}>
        <S.Burger onClick={animClick} isHide={isHideNav}>
          <S.Line1 isHide={isHideNav} isAnim={isAnimBurg} />
          <S.Line2 isHide={isHideNav} />
          <S.Line3 isHide={isHideNav} isAnim={isAnimBurg} />
        </S.Burger>
        {!isHideNav && <S.Title>Winy</S.Title>}
        <SettingButton isHide={isHideNav} />
      </S.NavigatorHeader>
      {!isHideNav && (
        <S.ProfileInfoBlock>
          <S.PhotoUrl>
            <S.Img src={malePhoto} alt="" />
          </S.PhotoUrl>
          <S.LoginUser>Artem12345</S.LoginUser>
          <S.Follows>Followers and Following</S.Follows>
        </S.ProfileInfoBlock>
      )}
      <Navigation isHideNav={isHideNav} />
    </S.NavigatorBlock>
  );
};

export default Header;
