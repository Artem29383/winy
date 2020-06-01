import styled from 'styled-components';

export default {
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

    &.like svg {
      fill: red;
    }
  `,
  Count: styled.div`
    font-size: 18px;
    color: #67707a;
    margin-left: 6px;

    &.like {
      color: red;
    }
  `,
};
