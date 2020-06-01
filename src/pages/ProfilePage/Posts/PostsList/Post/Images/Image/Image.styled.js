import styled from 'styled-components';

export default {
  ImageWrapper: styled.div`
    height: 100%;
    width: 100%;
    cursor: pointer;
  `,
  Img: styled.img`
    width: 100%;
    object-fit: ${({ isOpen }) => (isOpen ? 'contain' : 'cover')};
    height: 100%;
  `,
  ImageModalWrap: styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    padding: 0 5px 5px 5px;
    border-radius: 4px;
  `,
};
