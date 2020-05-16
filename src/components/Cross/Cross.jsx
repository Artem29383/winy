import React from 'react';
import PropTypes from 'prop-types';
import S from './Cross.styled';

const Cross = ({
  color,
  top,
  left,
  right,
  bottom,
  position,
  rotate,
  clickHandle,
}) => {
  return (
    <S.Div
      onClick={clickHandle}
      position={position}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      rotate={rotate}
    >
      <S.Line1 color={color} />
      <S.Line2 color={color} />
    </S.Div>
  );
};

Cross.propTypes = {
  top: PropTypes.string,
  rotate: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  position: PropTypes.string,
  color: PropTypes.string,
  clickHandle: PropTypes.func,
};

Cross.defaultProps = {
  color: 'red',
  rotate: '0deg',
  top: null,
  bottom: null,
  right: null,
  left: null,
  position: 'static',
};

export default Cross;
