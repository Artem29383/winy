import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Icons from 'assets/images/Icons.styled';
import imageAdd from 'assets/images/posts/imageAdd.svg';
import Button from 'components/Button/Button';
import { nanoid } from '@reduxjs/toolkit';
import useAction from 'hooks/useAction';
import { firebaseCreateUserPost } from 'models/user/reducer';
import ProgressBar from 'components/ProgressBar';
import useSelector from 'hooks/useSelector';
import { progressUploadSelector } from 'models/app/selectors';
import Tooltip from 'components/Tooltip/Tooltip.tsx';
import S from './Footer.styled';

const Footer = ({
  changeHandle,
  value,
  images,
  setDisableBtn,
  isDisableBtn,
}) => {
  const createPost = useAction(firebaseCreateUserPost);
  const progress = useSelector(progressUploadSelector);
  const createPostHandle = () => {
    setDisableBtn(true);
    const data = { postId: nanoid(), value, images };
    createPost(data);
  };

  return (
    <S.Footer>
      <S.Functions>
        <S.FunctionWrap>
          <Tooltip title="Add image (max 2.5MB)" minWidth="70px">
            <S.Label htmlFor="inputMultiple">
              <Icons.AddImage>
                <use xlinkHref={`${imageAdd}#imageAdd`} />
              </Icons.AddImage>
            </S.Label>
          </Tooltip>
          <S.Input
            id="inputMultiple"
            multiple
            type="file"
            onChange={changeHandle}
          />
        </S.FunctionWrap>
      </S.Functions>
      {isDisableBtn && (
        <S.ProgressBarWrapper>
          <ProgressBar progress={progress} />
        </S.ProgressBarWrapper>
      )}
      <S.SubmitWrapper>
        <Button
          onClickHandler={createPostHandle}
          isDisable={isDisableBtn}
          className={isDisableBtn ? 'disable' : ''}
        >
          Publish
        </Button>
      </S.SubmitWrapper>
    </S.Footer>
  );
};

Footer.propTypes = {
  changeHandle: PropTypes.func,
  value: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  setDisableBtn: PropTypes.func,
  isDisableBtn: PropTypes.bool,
};

export default memo(Footer);
