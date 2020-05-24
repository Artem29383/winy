import React from 'react';
import PropTypes from 'prop-types';
import S from './Image.styled';

const Image = ({ url }) => {
  return (
    <S.ImageWrapper>
      <S.Img src={url} />
    </S.ImageWrapper>
  );
};

Image.propTypes = {
  url: PropTypes.string,
};

export default Image;
