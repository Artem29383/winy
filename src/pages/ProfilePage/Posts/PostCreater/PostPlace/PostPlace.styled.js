import styled from 'styled-components';

export default {
  PostPlace: styled.div`
    width: 100%;
    padding: 5px;
    display: flex;
    position: relative;
  `,
  PostAvatar: styled.div`
    flex-basis: 15%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 80px;
  `,
  PostContent: styled.div`
    line-height: 1.462;
    flex-basis: 85%;
    cursor: text;
    position: relative;
    margin-top: 25px;
  `,
  PostPlaceHolder: styled.div`
    font-family: 'Roboto Black', sans-serif;
    font-size: 16px;
    color: ${({ edit }) => (edit ? '#464646' : '#828282')};
    position: absolute;
    pointer-events: none;
    display: ${({ isHidePlaceHolder }) =>
      isHidePlaceHolder ? 'none' : 'block'};
    top: 0;
    transition: color 0.2s linear;
  `,
  ImageWrapper: styled.div`
    width: 70px;
    height: 70px;
  `,
  Img: styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  `,
  Editable: styled.div`
    font-family: 'Roboto Light', sans-serif;
    font-size: 16px;
    color: #000;
    min-height: 100px;
    max-width: 750px;
    padding-bottom: 15px;
    width: 100%;
    word-wrap: break-word;
  `,
};
