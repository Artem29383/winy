import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import S from './PostPlace.styled';

const PostPlace = ({
  edit,
  value,
  creator,
  setEdit,
  setValue,
  lowAvatarURL,
}) => {
  const reference = useRef(null);
  const [isHidePlaceHolder, setIsHidePlaceHolder] = useState(false);

  useEffect(() => {
    if (reference.current && edit) {
      reference.current.focus();
    }
  }, [edit]);

  const stopEditHandleBlur = e => {
    const text = reference.current.textContent;
    if (!creator.current.contains(e.target) && !text.trim()) {
      setEdit(false);
    }
  };

  const setEditHandle = () => {
    setEdit(true);
  };

  useEffect(() => {
    if (edit) document.addEventListener('mousedown', stopEditHandleBlur);
    else document.removeEventListener('mousedown', stopEditHandleBlur);
    return () => {
      document.removeEventListener('mousedown', stopEditHandleBlur);
    };
  }, [edit, creator]);

  useEffect(() => {
    if (value.trim() && !isHidePlaceHolder) {
      setIsHidePlaceHolder(true);
    }
    if (!value.trim() && isHidePlaceHolder) {
      setIsHidePlaceHolder(false);
    }
  }, [value, isHidePlaceHolder]);

  const changeHandle = useCallback(
    e => {
      setValue(e.currentTarget.textContent);
    },
    [value]
  );

  return (
    <S.PostPlace>
      <S.PostAvatar>
        <S.ImageWrapper>
          <S.Img src={lowAvatarURL} />
        </S.ImageWrapper>
      </S.PostAvatar>
      <S.PostContent onClick={setEditHandle}>
        <S.PostPlaceHolder isHidePlaceHolder={isHidePlaceHolder} edit={edit}>
          Anything new?
        </S.PostPlaceHolder>
        {edit && (
          <S.Editable ref={reference} contentEditable onInput={changeHandle} />
        )}
      </S.PostContent>
    </S.PostPlace>
  );
};

PostPlace.propTypes = {
  edit: PropTypes.bool,
  setEdit: PropTypes.func,
  value: PropTypes.string,
  setValue: PropTypes.func,
  creator: PropTypes.any,
  lowAvatarURL: PropTypes.string,
};

export default PostPlace;
