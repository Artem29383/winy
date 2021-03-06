import styled from 'styled-components';

export default {
  FooterEditorButtons: styled.div`
    width: 100%;
    padding: 15px 10px;
    display: flex;
  `,
  AboutContent: styled.div`
    width: 100%;
    word-break: break-word;
    overflow-y: auto;
    min-height: 150px;
    cursor: ${({ isOwner }) => isOwner && 'pointer'};
    font-family: 'Roboto Light', serif;
    padding: 10px 10px 20px 10px;
    background-color: rgba(90, 90, 90, 0.1);
    border-radius: 10px;
    max-height: 450px;
    color: ${props => props.theme.aboutContentColor};

    & a {
      color: ${props => props.theme.aboutContentColorLink};
    }

    & h6 {
      font-size: 32px;
      margin: 0 !important;
      margin-top: 5px !important;
    }

    & strong {
      font-family: 'Roboto Medium', serif;
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
  MySelfInfo: styled.div`
    flex-basis: 60%;
  `,
  DefaultWall: styled.div`
    font-size: 24px;
    padding-top: 10px;
    color: rgba(0, 0, 0, 0.5);
  `,
};
