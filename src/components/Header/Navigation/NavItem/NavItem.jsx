import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icons from 'assets/images/Icons.styled';
import S, { ItemText, LeftBorder } from './NavItem.styled';

const NavItem = ({
  to,
  svg,
  svgId,
  text,
  isHideNav,
  setIndex,
  currentIndex,
  itemIndex,
}) => {
  const [direction, setDirection] = useState('bottom');
  const clickHandle = () => {
    setIndex(itemIndex);
    setDirection(currentIndex < itemIndex ? 'top' : 'bottom');
  };
  return (
    <S.Item key={to} to={to} activeClassName="active" onClick={clickHandle}>
      <LeftBorder direction={direction} />
      <S.ItemContent>
        <Icons.ProfileNav isHide={isHideNav}>
          <use xlinkHref={`${svg}#${svgId}`} />
        </Icons.ProfileNav>
        {!isHideNav && <ItemText>{text}</ItemText>}
      </S.ItemContent>
    </S.Item>
  );
};

NavItem.propTypes = {
  isHideNav: PropTypes.bool,
  to: PropTypes.string,
  setIndex: PropTypes.func,
  currentIndex: PropTypes.number,
  itemIndex: PropTypes.number,
  svg: PropTypes.any,
  svgId: PropTypes.string,
  text: PropTypes.string,
};

export default NavItem;
