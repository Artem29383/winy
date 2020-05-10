import styled from 'styled-components';

export default {
  Wrapper: styled.div`
    max-width: ${({ width }) => `${width}px`};
    width: 100%;
    height: 100%;
    margin: 0 auto;
  `,
};
