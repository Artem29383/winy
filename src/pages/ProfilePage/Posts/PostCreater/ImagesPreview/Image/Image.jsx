import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Icons from 'assets/images/Icons.styled';
import cross from 'assets/images/posts/close.svg';
import S from './Image.styled';

const Image = ({ preview, id, removeImage }) => {
  const removeImageHandle = () => {
    removeImage(id);
  };

  return (
    <S.ImageWrapper>
      <S.Img src={preview} />
      <S.Cross onClick={removeImageHandle}>
        <Icons.CloseImage>
          <use xlinkHref={`${cross}#closeImage`} />
        </Icons.CloseImage>
      </S.Cross>
    </S.ImageWrapper>
  );
};

Image.propTypes = {
  preview: PropTypes.string,
  id: PropTypes.string,
  removeImage: PropTypes.func,
};

export default memo(Image);
