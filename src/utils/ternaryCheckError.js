import Loader from 'components/Loader/Loader';
import React from 'react';

export const ternaryCheckError = (
  isLoad,
  fetchError,
  textUserButton,
  action = '',
  str = '',
  idError = '',
  strError = '',
  widthLoader = '30',
  heightLoader = '30'
) => {
  return isLoad && action === str ? (
    <Loader
      width={widthLoader}
      height={heightLoader}
      top="50"
      position="absolute"
      translate="translateY(-50%)"
    />
  ) : fetchError && idError === strError ? (
    'Retry'
  ) : (
    textUserButton
  );
};
