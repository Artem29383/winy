import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import SettingButton from 'components/SettingButton';
import useToggle from 'hooks/useToggle';
import Navigation from 'components/Header/Navigation';
import useSelector from 'hooks/useSelector';
import { userSelector } from 'models/user/selectors';
import S from './Header.styled';

const Header = () => {
  const [isHideNav, setIsHideNav] = useToggle(false);
  const LAPTOP_SIZE = 1024;
  const [isAnimBurg, setIsAnimBurg] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const { login, avatarURL } = useSelector(userSelector);

  const animClick = useCallback(() => {
    setIsAnimBurg(true);
    setIsHideNav();
  }, [isAnimBurg, isHideNav]);

  useEffect(() => {
    if (windowSize < LAPTOP_SIZE) {
      if (isHideNav) {
        document.body.classList.remove('modal');
      } else {
        document.body.classList.add('modal');
      }
    }
  }, [isHideNav]);

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      setWindowSize(window.innerWidth);
      if (!isHideNav && windowSize < LAPTOP_SIZE) {
        animClick();
      }
    }, 1500);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return (
    <S.HeaderOverlay isHide={isHideNav} in={!isHideNav} timeout={200}>
      <S.NavigatorBlock isHide={isHideNav} width={isHideNav ? '55px' : '290px'}>
        {windowSize < LAPTOP_SIZE && (
          <S.BackDrop isHide={isHideNav} onClick={animClick} />
        )}
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
              <S.Img src={avatarURL} alt="" />
            </S.PhotoUrl>
            <S.LoginUser>{login}</S.LoginUser>
            <S.Follows>Followers and Following</S.Follows>
          </S.ProfileInfoBlock>
        )}
        <Navigation isHideNav={isHideNav} />
      </S.NavigatorBlock>
    </S.HeaderOverlay>
  );
};

export default Header;
