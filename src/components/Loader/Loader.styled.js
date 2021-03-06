import styled, { keyframes } from 'styled-components';
/* stylelint-disable */

const keyframes1 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderComponent = styled.div`
  display: block;
  position: ${({ position }) => position};
  top: ${({ top }) => top && `${top}%`};
  left: ${({ left }) => left && `${left}%`};
  transform: ${({ position, translate }) =>
    position === 'absolute' ? translate : ''};
  width: ${({ width }) => (width ? `${width}px` : '64px')};
  height: ${({ height }) => (height ? `${height}px` : '64px')};

  & div {
    display: block;
    position: absolute;
    width: ${({ width }) => (width ? `${width}px` : '64px')};
    height: ${({ height }) => (height ? `${height}px` : '64px')};
    border: ${({ color, theme }) =>
      color ? `5px solid ${color}` : `5px solid ${theme.loaderColor}`};
    border-radius: 50%;
    animation: ${keyframes1} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme, color }) =>
      color
        ? `${color} transparent transparent transparent`
        : `${theme.loaderColor} transparent transparent transparent`};
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
/* stylelint-enable */
