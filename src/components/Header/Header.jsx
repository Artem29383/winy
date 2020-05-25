import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import SettingButton from 'components/SettingButton';
import useToggle from 'hooks/useToggle';
import Navigation from 'components/Header/Navigation';
import useSelector from 'hooks/useSelector';
import { initialUserDataSelector } from 'models/auth/selectors';
import Burger from 'components/Header/Burger';
import S from './Header.styled';

const Header = () => {
  const [isHideNav, setIsHideNav] = useToggle(false);
  const LAPTOP_SIZE = 1024;
  const TABLET = 768;
  const [isAnimBurg, setIsAnimBurg] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const { login, avatarURL, uid } = useSelector(initialUserDataSelector);

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
    if (!isHideNav && windowSize < LAPTOP_SIZE) {
      animClick();
    }
  }, [windowSize]);

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      setWindowSize(window.innerWidth);
    }, 500);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return (
    <>
      {windowSize < TABLET && (
        <Burger
          isHideNav={isHideNav}
          animClick={animClick}
          isAnimBurg={isAnimBurg}
        />
      )}
      {windowSize < LAPTOP_SIZE && (
        <S.BackDrop
          unmountOnExit
          in={!isHideNav}
          timeout={200}
          isHide={isHideNav}
          onClick={animClick}
        />
      )}
      <S.HeaderOverlay isHide={isHideNav} in={!isHideNav} timeout={200}>
        <S.NavigatorBlock
          isHide={isHideNav}
          width={isHideNav ? '55px' : '290px'}
        >
          <S.NavigatorHeader isHide={isHideNav}>
            {windowSize >= TABLET && (
              <Burger
                isHideNav={isHideNav}
                animClick={animClick}
                isAnimBurg={isAnimBurg}
              />
            )}
            <S.Title isHide={isHideNav}>Winy</S.Title>
            <SettingButton isHide={isHideNav} />
          </S.NavigatorHeader>
          <S.ProfileInfoBlock isHide={isHideNav}>
            <S.PhotoUrl>
              <S.Img src={avatarURL} alt="" />
            </S.PhotoUrl>
            <S.LoginUser>{login}</S.LoginUser>
            <S.Follows>Followers and Following</S.Follows>
          </S.ProfileInfoBlock>
          <Navigation isHideNav={isHideNav} uid={uid} />
        </S.NavigatorBlock>
      </S.HeaderOverlay>
    </>
  );
};

export default Header;
