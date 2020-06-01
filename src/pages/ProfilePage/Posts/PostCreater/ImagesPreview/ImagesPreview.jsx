import React from 'react';
import PropTypes from 'prop-types';
import Image from 'pages/ProfilePage/Posts/PostCreater/ImagesPreview/Image';
import S from './ImagesPreview.styled';

const ImagesPreview = ({ images, setImages }) => {
  const removeImageHandle = id => {
    setImages(images.filter(img => img.id !== id));
  };
  return (
    <S.ImagesPreview>
      {images.map(img => (
        <Image
          key={img.id}
          preview={img.preview}
          id={img.id}
          removeImage={removeImageHandle}
        />
      ))}
    </S.ImagesPreview>
  );
};

ImagesPreview.propTypes = {
  images: PropTypes.array.isRequired,
  setImages: PropTypes.func,
};

export default ImagesPreview;
