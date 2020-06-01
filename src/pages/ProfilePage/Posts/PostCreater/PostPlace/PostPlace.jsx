import React, { memo, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import S from './PostPlace.styled';

const PostPlace = ({
  edit,
  value,
  setEdit,
  setValue,
  lowAvatarURL,
  reference,
  isOver,
}) => {
  const [isHidePlaceHolder, setIsHidePlaceHolder] = useState(false);

  useEffect(() => {
    if (reference.current && edit) {
      reference.current.focus();
    }
  }, [edit]);

  const setEditHandle = () => {
    setEdit(true);
  };

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
      setValue(e.currentTarget.innerHTML);
    },
    [value]
  );

  return (
    <S.PostPlace isOver={isOver}>
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
  lowAvatarURL: PropTypes.string,
  reference: PropTypes.any,
  isOver: PropTypes.bool,
};

export default memo(PostPlace);
