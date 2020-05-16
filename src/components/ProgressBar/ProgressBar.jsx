import React from 'react';
import PropTypes from 'prop-types';
import S from './ProgressBar.styled';

const ProgressBar = ({ progress }) => {
  return (
    <S.Bar>
      <S.Progress width={progress} />
    </S.Bar>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number,
};

export default ProgressBar;
