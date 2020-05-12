import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { LoaderComponent } from './Loader.styled';

const Loader = ({ width, height, position, color }) => (
  <LoaderComponent
    width={width}
    height={height}
    position={position}
    color={color}
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
};
export default memo(Loader);
