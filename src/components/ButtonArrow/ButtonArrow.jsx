import React from 'react';
import PropTypes from 'prop-types';
import S from './ButtonArrow.styled';

const ButtonArrow = ({ deg, top, right, left, clickHandle }) => {
  return (
    <S.ButtonArrow
      deg={deg}
      top={top}
      right={right}
      left={left}
      onClick={clickHandle}
    />
  );
};

ButtonArrow.propTypes = {
  deg: PropTypes.string,
  top: PropTypes.string,
  right: PropTypes.string,
  left: PropTypes.string,
  clickHandle: PropTypes.func,
};

ButtonArrow.defaultProps = {
  right: null,
  left: null,
  top: null,
};

export default ButtonArrow;
