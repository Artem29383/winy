import styled from 'styled-components';

export default {
  Editor: styled.div`
    font-size: 32px;
    border-radius: 10px;
    font-family: 'Roboto Light', serif;
    color: ${props => props.theme.textEditorMain};

    div {
      &.ck-editor__main {
        overflow-y: auto;
      }

      &.ck-content {
        min-height: 150px;
        max-height: 450px;
        height: 100%;
        word-break: break-all;
      }
    }

    & strong {
      font-family: 'Roboto Medium', serif;
    }

    & h6 {
      font-size: 32px;
      margin: 0 !important;
      margin-top: 5px !important;
    }

    & h5 {
      font-size: 24px;
      margin: 0 !important;
      margin-top: 5px !important;
    }

    & p {
      font-size: 18px;
      margin: 0 !important;
      margin-top: 5px !important;
    }

    & h4 {
      font-size: 38px;
      margin: 0 !important;
      margin-top: 5px !important;
    }

    & h3 {
      font-size: 46px;
      margin: 0 !important;
      margin-top: 5px !important;
    }

    & h2 {
      font-size: 52px;
      margin: 0 !important;
      margin-top: 5px !important;
    }

    & h1 {
      font-size: 60px;
      margin: 0;
    }
  `,
};
