import React, { memo } from 'react';
import PropTypes from 'prop-types';
import S from './Tab.styled';

const Tab = ({ value }) => {
  return (
    <S.Tab to={value.to} activeClassName="active">
      {value.text}
    </S.Tab>
  );
};

Tab.propTypes = {
  value: PropTypes.object,
};

export default memo(Tab);
