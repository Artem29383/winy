import styled from 'styled-components';
import colors from 'styles/colors';

export default {
  Button: styled.button.attrs(({ x, y }) => ({
    style: {
      backgroundImage: `radial-gradient(circle at ${x}px ${y}px, transparent 1%, ${colors.mineShaft} 1%)`,
    },
  }))`
    border: none;
    border-radius: 2px;
    padding: 0 18px;
    line-height: 2.5;
    position: relative;
    font-size: 16px;
    width: ${({ width }) => width && `${width}px`};
    height: ${({ height }) => height && `${height}px`};
    cursor: pointer;
    display: block;
    color: ${colors.silverChalice};
    text-transform: uppercase;
    box-shadow: 0 0 4px ${colors.tundora};
    transition: background 0.8s, box-shadow 0.1s ease-in-out;
    background: ${colors.mineShaft} left/15000%;

    &.circle {
      border-radius: 50%;
      height: 100%;
      width: 100%;
      line-height: 0;
    }

    &:active {
      box-shadow: 0 0 5px 0 rgba(255, 139, 0, 1);
      background-color: ${colors.tundora};
      background-size: 100%;
      transition: background 0s;
    }

    &.center {
      margin: 0 auto;
    }
  `,
};
