import React from 'react';
import PropTypes from 'prop-types';
import S from './Online.styled';

const Online = ({ isOnline }) => {
  return <S.Online isOnline={isOnline} />;
};

Online.propTypes = {
  isOnline: PropTypes.bool.isRequired,
};

export default Online;
