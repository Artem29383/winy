import Loader from 'components/Loader/Loader';
import React from 'react';

export const ternaryCheckError = (
  isLoad,
  fetchError,
  textUserButton,
  action = '',
  str = '',
  widthLoader = '30',
  heightLoader = '30'
) => {
  return isLoad && action === str ? (
    <Loader width={widthLoader} height={heightLoader} />
  ) : fetchError && action === str ? (
    'Retry'
  ) : (
    textUserButton
  );
};
