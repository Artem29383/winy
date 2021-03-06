import styled from 'styled-components';
import { device } from 'constants/device';

export default {
  Content: styled.div`
    width: 100%;
    display: flex;
    position: relative;
    height: 100%;
    background-color: ${props => props.theme.contentColorBody};
    transition: background-color 0.2s linear;
  `,
  Theme: styled.div`
    width: 60px;
    height: 60px;
    position: fixed;
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
    top: 50px;
    right: 50px;
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
