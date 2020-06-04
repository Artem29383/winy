import styled from 'styled-components';

export default {
  Wrapper: styled.div`
    max-width: ${({ width }) => `${width}px`};
    width: 100%;
    padding: 0 15px;
    min-height: 100vh;
    margin: 0 auto;
  `,
};
