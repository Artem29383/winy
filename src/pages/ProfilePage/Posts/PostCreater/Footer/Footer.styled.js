import styled from 'styled-components';

export default {
  Footer: styled.div`
    width: 100%;
    background: #fafbfc;
    border-top: 1px solid #e7e8ec;
    padding: 13px 20px 12px;
    display: flex;
    align-items: center;
  `,
  Functions: styled.div`
    margin-left: 25px;
  `,
  SubmitWrapper: styled.div`
    margin-left: auto;
  `,
  FunctionWrap: styled.div``,
  Label: styled.label`
    cursor: pointer;

    &:hover svg {
      fill: #000;
    }
  `,
  Input: styled.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  `,
};
