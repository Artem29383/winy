import React from 'react';
import PropTypes from 'prop-types';
import Image from 'pages/ProfilePage/Posts/PostsList/Post/Images/Image';
import S from './Images.styled';

const Images = ({ images }) => {
  return (
    <S.Images>
      {images.map(img => (
        <Image url={img.url} key={img.id} />
      ))}
    </S.Images>
  );
};

Images.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Images;
