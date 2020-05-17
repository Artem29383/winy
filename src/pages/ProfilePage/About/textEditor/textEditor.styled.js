import styled from 'styled-components';

export default {
  Editor: styled.div`
    font-size: 32px;
    border: 3px solid black;
    border-radius: 10px;
    overflow: hidden;

    div {
      &.ck-editor__main {
        height: 300px;
        overflow-y: auto;
      }

      &.ck-content {
        height: 100%;
      }
    }

    & h2 {
      font-size: 36px;
    }

    & h3 {
      font-size: 32px;
    }

    & h4 {
      font-size: 28px;
    }
  `,
};
