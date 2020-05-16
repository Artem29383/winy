import styled from 'styled-components';

export default {
  Button: styled.button`
    border: none;
    border-radius: 2px;
    min-width: 91px;
    line-height: 2.5;
    position: relative;
    font-size: 16px;
    width: ${({ width }) => width && `${width}px`};
    height: ${({ height }) => height && `${height}px`};
    cursor: pointer;
    display: flex;
    justify-content: center;
    color: ${props => props.theme.btnTextColor};
    text-transform: uppercase;
    transition: background 0.8s;
    background-color: ${props => props.theme.btnBackground};

    &:hover {
      background: ${({
        x,
        y,
        theme,
      }) => `${theme.btnBackgroundHover} radial-gradient(circle at ${x}px ${y}px, transparent 1%, ${theme.btnBackgroundHover} 1%)
        left/15000%`};
    }

    &.circle {
      border-radius: 50%;
      height: 100%;
      width: 100%;
      line-height: 0;
    }

    &:active {
      box-shadow: 0 0 5px 0 rgba(255, 139, 0, 1);
      background-color: ${props => props.theme.btnBackgroundActive};
      background-size: 100%;
      transition: background 0s;
    }

    &.center {
      margin: 0 auto;
    }
  `,
};
