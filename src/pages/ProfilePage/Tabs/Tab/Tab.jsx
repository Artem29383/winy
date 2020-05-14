import React, { useState } from 'react';
import PropTypes from 'prop-types';
import S from './Tab.styled';

const Tab = ({ value, setIndex, index, currentTabIndex }) => {
  const [direction, setDirection] = useState('left');
  const [reversDirection, setReversDirection] = useState('right');
  const clickHandle = () => {
    setIndex(index);
    setDirection(currentTabIndex > index ? 'left' : 'right');
    setReversDirection(currentTabIndex < index ? 'left' : 'right');
  };
  return (
    <S.Tab
      direction={direction}
      reversDirection={reversDirection}
      onClick={clickHandle}
      className={index === currentTabIndex && 'active'}
    >
      {value}
    </S.Tab>
  );
};

Tab.propTypes = {
  setIndex: PropTypes.func,
  value: PropTypes.string,
  index: PropTypes.number,
  currentTabIndex: PropTypes.number,
};

export default Tab;
