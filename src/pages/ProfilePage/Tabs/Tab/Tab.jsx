import React, { memo } from 'react';
import PropTypes from 'prop-types';
import routes from 'constants/routes';
import S from './Tab.styled';

const Tab = ({ value, uid }) => {
  console.log(`${routes.profile}/${uid}${value.to}`);
  return (
    <S.Tab to={`${routes.profile}/${uid}${value.to}`} activeClassName="active">
      {value.text}
    </S.Tab>
  );
};

Tab.propTypes = {
  value: PropTypes.object,
  uid: PropTypes.string.isRequired,
};

export default memo(Tab);
