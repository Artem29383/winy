import styled from 'styled-components';

export default {
  Post: styled.div`
    box-shadow: 0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8;
    border-radius: 4px;
    padding: 10px 25px 15px 40px;
    margin-bottom: 15px;
  `,
  PostBody: styled.div`
    width: 100%;
    padding-top: 15px;
    padding-left: 5px;
  `,
  Text: styled.div`
    font-size: 14px;
    line-height: 1.462;
    padding-top: 3px;
    overflow: hidden;
    word-wrap: break-word;
    font-family: 'Roboto Light', sans-serif;
    margin-bottom: 5px;
  `,
  PostFooter: styled.div`
    padding-top: 12px;
    border-top: 1px solid #e7e8ec;
    display: flex;
  `,
  SvgWrap: styled.div`
    display: flex;
    align-items: center;
    margin: 0 10px;
    cursor: pointer;

    &:hover svg {
      fill: red;
    }
  `,
  Count: styled.div`
    font-size: 18px;
    color: #67707a;
    margin-left: 6px;
  `,
};
