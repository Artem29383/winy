import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from 'pages/ProfilePage/Posts/PostCreater/Footer/Footer';
import PostPlace from 'pages/ProfilePage/Posts/PostCreater/PostPlace';
import useSelector from 'hooks/useSelector';
import { successMsgSelector } from 'models/app/selectors';
import useAction from 'hooks/useAction';
import { SUCCESS_MSG } from 'constants/constants';
import ImagesPreview from 'pages/ProfilePage/Posts/PostCreater/ImagesPreview';
import { usePhotoWork } from 'hooks/usePhotoWork';
import { nanoid } from '@reduxjs/toolkit';
import { setSuccess } from 'models/app/reducer';
import S from './PostCreater.styled';

const PostCreater = ({ lowAvatarURL }) => {
  const {
    image,
    changeHandle,
    preview,
    counts,
    isDisableBtn,
    setDisableBtn,
  } = usePhotoWork();
  const successMsg = useSelector(successMsgSelector);
  const setSuccessMsg = useAction(setSuccess);
  const creator = useRef(null);
  const reference = useRef(null);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (successMsg.trim() && successMsg === SUCCESS_MSG.postCreated) {
      setValue('');
      setImages([]);
      setSuccessMsg('');
      setEdit(false);
      setDisableBtn(false);
    }
  }, [successMsg]);

  const stopEditHandleBlur = e => {
    if (!creator) {
      if (!creator.current.contains(e.target)) {
        if (!reference.current.textContent.trim() && images.length < 1) {
          setEdit(false);
          setValue('');
        }
      }
    }
  };

  useEffect(() => {
    if (image) {
      setImages([
        ...images,
        {
          id: nanoid(),
          file: image,
          preview,
        },
      ]);
      if (counts === images.length + 1) {
        setDisableBtn(false);
      }
    }
  }, [image]);

  useEffect(() => {
    if (edit) document.addEventListener('mousedown', stopEditHandleBlur);
    else document.removeEventListener('mousedown', stopEditHandleBlur);
    return () => {
      document.removeEventListener('mousedown', stopEditHandleBlur);
    };
  }, [edit, creator, value, images]);

  return (
    <S.PostCreater ref={creator}>
      <PostPlace
        reference={reference}
        lowAvatarURL={lowAvatarURL}
        stopEditHandleBlur={stopEditHandleBlur}
        edit={edit}
        setEdit={setEdit}
        value={value}
        setValue={setValue}
        preview={preview}
      />
      {images.length > 0 && (
        <ImagesPreview images={images} setImages={setImages} />
      )}
      {edit && (
        <Footer
          changeHandle={changeHandle}
          value={value}
          images={images}
          isDisableBtn={isDisableBtn}
          setDisableBtn={setDisableBtn}
        />
      )}
    </S.PostCreater>
  );
};

PostCreater.propTypes = {
  lowAvatarURL: PropTypes.string,
};

export default PostCreater;
