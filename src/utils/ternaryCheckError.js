import Loader from 'components/Loader/Loader';
import React from 'react';

// eslint-disable-next-line no-unused-vars
export const ternaryCheckError = (
  isLoad,
  fetchError,
  textUserButton,
  action = '',
  str = '',
  widthLoader = '30',
  heightLoader = '30'
) => {
  // eslint-disable-next-line no-nested-ternary
  return isLoad && action === str ? (
    <Loader width={widthLoader} height={heightLoader} />
  ) : fetchError && action === str ? (
    'Retry'
  ) : (
    textUserButton
  );
};
