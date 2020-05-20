import React, { useState } from 'react';
import PropTypes from 'prop-types';
import navComponents from 'components/Header/Navigation/navItemsList';
import NavItem from 'components/Header/Navigation/NavItem';
import S from './Navigation.styled';

const Navigation = ({ isHideNav }) => {
  const [index, setIndex] = useState(1);

  const navItems = navComponents.map(({ to, svg, svgId, text }, i) => (
    <NavItem
      key={to}
      isHideNav={isHideNav}
      to={to}
      text={text}
      svg={svg}
      svgId={svgId}
      itemIndex={i}
      currentIndex={index}
      setIndex={setIndex}
    />
  ));

  return <S.Nav>{navItems}</S.Nav>;
};

Navigation.propTypes = {
  isHideNav: PropTypes.bool,
};

export default Navigation;
