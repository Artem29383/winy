import styled from 'styled-components';

export default {
  Online: styled.div`
    width: 16px;
    height: 16px;
    margin-left: 10px;
    border-radius: 50%;
    background-color: ${({ isOnline }) => (isOnline ? 'yellowgreen' : 'gray')};
  `,
};
