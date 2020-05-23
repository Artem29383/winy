import React, { memo, useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import S from './Button.styled';

const Button = ({
  children,
  className,
  onClickHandler,
  isLoader,
  margin,
  isDisable,
}) => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const btnRef = useRef();
  let width;
  let height;
  if (isLoader) {
    if (btnRef.current) {
      const figure = btnRef.current.getBoundingClientRect();
      width = Math.ceil(figure.width);
      height = Math.ceil(figure.height);
    }
  }

  const setCoords = useCallback(
    e => {
      const x = e.clientX - e.currentTarget.getBoundingClientRect().left;
      const y = e.clientY - e.currentTarget.getBoundingClientRect().top;
      setCoordinates({ x, y });
    },
    [coordinates]
  );

  return (
    <S.Button
      ref={btnRef}
      margin={margin}
      className={className}
      onClick={onClickHandler}
      onMouseDown={setCoords}
      width={width}
      height={height}
      disabled={isDisable}
      {...coordinates}
    >
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  isLoader: PropTypes.bool,
  onClickHandler: PropTypes.func,
  margin: PropTypes.string,
  isDisable: PropTypes.bool,
};

Button.defaultProps = {
  isDisable: false,
};

export default memo(Button);
