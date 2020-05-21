import React, { useState } from 'react';
import PropTypes from 'prop-types';
import navComponents from 'components/Header/Navigation/navItemsList';
import NavItem from 'components/Header/Navigation/NavItem';
import routes from 'constants/routes';
import { NAVLIST_NAME } from 'constants/constants';
import S from './Navigation.styled';

const Navigation = ({ isHideNav, uid }) => {
  const [index, setIndex] = useState(1);

  const navItems = navComponents.map(({ to, svg, svgId, text }, i) => {
    if (text === NAVLIST_NAME.myPage) {
      return (
        <NavItem
          key={`${to}/${uid}${routes.about}`}
          isHideNav={isHideNav}
          to={`${to}/${uid}${routes.about}`}
          text={text}
          svg={svg}
          svgId={svgId}
          itemIndex={i}
          currentIndex={index}
          setIndex={setIndex}
        />
      );
    }
    return (
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
    );
  });

  return <S.Nav>{navItems}</S.Nav>;
};

Navigation.propTypes = {
  isHideNav: PropTypes.bool,
  uid: PropTypes.string,
};

export default Navigation;
