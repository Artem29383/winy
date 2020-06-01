import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useToggle from 'hooks/useToggle';
import Portal from 'components/Portal';
import Modal from 'components/Modal';
import ButtonArrow from 'components/ButtonArrow';
import S from './Image.styled';

const Image = ({ url, index, images }) => {
  const [showModal, setShowModal] = useToggle(false);
  const [currentIndex, setCurrentIndex] = useState(index);
  const [isSlider, setIsSlider] = useState(false);

  const showPhoto = () => {
    setCurrentIndex(index);
    setIsSlider(images.length > 1);
    setShowModal();
  };

  const nextPhoto = () => {
    const MAX_INDEX = images.length - 1;
    if (currentIndex + 1 > MAX_INDEX) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevPhoto = () => {
    const MIN_INDEX = 0;
    if (currentIndex - 1 < MIN_INDEX) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <S.ImageWrapper onClick={showPhoto}>
        <S.Img src={url} />
      </S.ImageWrapper>
      <Portal id="LargePhotos">
        <Modal
          isOpen={showModal}
          toggle={setShowModal}
          title=""
          width="700"
          top="30px"
          heightBody="550"
        >
          <S.ImageModalWrap>
            {isSlider && (
              <ButtonArrow
                deg="-45"
                top="40%"
                left="20px"
                clickHandle={prevPhoto}
              />
            )}
            <S.Img isOpen={showModal} src={images[currentIndex].url} />
            {isSlider && (
              <ButtonArrow
                deg="135"
                top="40%"
                right="20px"
                clickHandle={nextPhoto}
              />
            )}
          </S.ImageModalWrap>
        </Modal>
      </Portal>
    </>
  );
};

Image.propTypes = {
  url: PropTypes.string,
  index: PropTypes.number,
  images: PropTypes.array,
};

export default Image;
