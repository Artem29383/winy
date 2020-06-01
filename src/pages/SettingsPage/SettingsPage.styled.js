import styled from 'styled-components';
import { device } from 'constants/device';

export default {
  Content: styled.div`
    width: 100%;
    min-height: 100vh;
  `,
  Header: styled.div`
    height: 120px;
    padding: 0 50px;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e9ee;
  `,
  Title: styled.div`
    font-size: 22px;
    position: relative;
  `,
  Save: styled.div``,
  Body: styled.div`
    padding: 50px;
  `,
  UserInfo: styled.div`
    width: 100%;
  `,
  InputWrapper: styled.div`
    max-width: 250px;
  `,
  Theme: styled.div`
    width: 60px;
    height: 60px;
    position: absolute;
    border-radius: 50%;
    z-index: 1000;
    cursor: pointer;
    background-color: ${({ themeNow }) =>
      `${
        themeNow === 'light'
          ? 'rgba(0, 0, 0, 0.1)'
          : 'rgba(100%, 100%, 100%, 0.1)'
      }`};
    display: flex;
    top: 50%;
    transform: translateY(-50%);
    left: 120px;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s linear;

    &:hover {
      background-color: ${({ themeNow }) =>
        `${
          themeNow === 'light'
            ? 'rgba(0, 0, 0, 0.9)'
            : 'rgba(100%, 100%, 100%, 0.3)'
        }`};

      & svg {
        fill: ${({ theme, themeNow }) =>
          `${themeNow === 'light' ? theme.sunColor : theme.sunColor}`};
      }
    }

    @media ${device.mobileM} {
      top: 10px;
      right: 10px;
    }
  `,
};
