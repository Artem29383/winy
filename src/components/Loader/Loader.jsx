import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { LoaderComponent } from './Loader.styled';

const Loader = ({ width, height, position, color, top, left }) => (
  <LoaderComponent
    width={width}
    height={height}
    position={position}
    color={color}
    top={top}
    left={left}
  >
    <div />
    <div />
    <div />
    <div />
  </LoaderComponent>
);

Loader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  position: PropTypes.string,
  color: PropTypes.string,
  top: PropTypes.string,
  left: PropTypes.string,
};

Loader.defaultProps = {
  position: 'relative',
};
export default memo(Loader);
