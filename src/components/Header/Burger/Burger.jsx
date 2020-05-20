import React from 'react';
import PropTypes from 'prop-types';
import S from './Burger.styled';

const Burger = ({ isHideNav, isAnimBurg, animClick }) => {
  return (
    <S.Burger onClick={animClick} isHide={isHideNav}>
      <S.Line1 isHide={isHideNav} isAnim={isAnimBurg} />
      <S.Line2 isHide={isHideNav} />
      <S.Line3 isHide={isHideNav} isAnim={isAnimBurg} />
    </S.Burger>
  );
};

Burger.propTypes = {
  animClick: PropTypes.func,
  isHideNav: PropTypes.bool,
  isAnimBurg: PropTypes.bool,
};

export default Burger;
