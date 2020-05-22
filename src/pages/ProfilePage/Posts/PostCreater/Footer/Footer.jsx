import React, { memo } from 'react';
import Icons from 'assets/images/Icons.styled';
import imageAdd from 'assets/images/posts/imageAdd.svg';
import Button from 'components/Button/Button';
import S from './Footer.styled';

const Footer = () => {
  return (
    <S.Footer>
      <S.Functions>
        <S.FunctionWrap>
          <S.Label htmlFor="input">
            <Icons.AddImage>
              <use xlinkHref={`${imageAdd}#imageAdd`} />
            </Icons.AddImage>
          </S.Label>
          <S.Input id="input" type="file" />
        </S.FunctionWrap>
      </S.Functions>
      <S.SubmitWrapper>
        <Button>Publish</Button>
      </S.SubmitWrapper>
    </S.Footer>
  );
};

export default memo(Footer);
