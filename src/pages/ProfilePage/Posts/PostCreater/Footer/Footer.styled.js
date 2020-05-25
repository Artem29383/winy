import styled from 'styled-components';

export default {
  Footer: styled.div`
    width: 100%;
    background: #fafbfc;
    border-top: 1px solid #e7e8ec;
    padding: 13px 20px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Functions: styled.div`
    margin-left: 25px;
  `,
  SubmitWrapper: styled.div``,
  ProgressBarWrapper: styled.div`
    margin-left: auto;
    margin-right: 20px;
    max-width: 200px;
    width: 100%;
    height: 20px;
    position: relative;
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
