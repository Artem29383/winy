import styled from 'styled-components';

export default {
  ImageWrapper: styled.div`
    max-width: 350px;
    max-height: 450px;
    border: 2px solid #5a5151;
    position: relative;
    height: 100%;
    width: 100%;

    &:hover {
      & svg {
        opacity: 1;
      }
    }
  `,
  Img: styled.img`
    width: 100%;
    object-fit: cover;
    height: 100%;
  `,
  Cross: styled.div`
    position: absolute;
    display: flex;
    background: #000;
    opacity: 0.5;
    border-radius: 3px;
    padding: 5px;
    top: 5px;
    right: 5px;
    cursor: pointer;
  `,
};
