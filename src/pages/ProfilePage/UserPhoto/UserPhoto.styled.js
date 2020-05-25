import styled from 'styled-components';

export default {
  Photo: styled.div`
    cursor: ${({ isOwner }) => isOwner && 'pointer'};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `,
  Img: styled.img`
    border-radius: 10px;
    border: ${props => `3px solid ${props.theme.lpimgBorder}`};
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  WrapInputFile: styled.div`
    width: 100%;
    padding: 0 100px;
  `,
};
