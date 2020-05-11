import React from 'react';
import PropTypes from 'prop-types';
import S from './Container.styled';

const Container = ({ children, maxWidth }) => {
  return <S.Wrapper width={maxWidth}>{children}</S.Wrapper>;
};

Container.propTypes = {
  children: PropTypes.any,
  maxWidth: PropTypes.string.isRequired,
};

export default Container;
