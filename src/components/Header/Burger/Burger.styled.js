import styled, { css, keyframes } from 'styled-components';
import { device } from 'constants/device';

const animline1 = keyframes`
  0% {
    transform: rotate(0);
    width: 100%;
  }
  
  100% {
    width: 50%;
    transform: rotate(38deg) translateX(14px);
  }
`;

const obranimline1 = keyframes`
  0% {
    width: 50%;
    transform: rotate(38deg) translateX(14px);
  }
  
  100% {
    transform: rotate(0);
    width: 100%;
  }
`;

const animline3 = keyframes`
  0% {
    transform: rotate(0);
    width: 100%;
    opacity: 1;
  }
  
  100% {
    opacity: 1;
    width: 50%;
    transform: rotate(-36deg) translateX(14px);
  }
`;

const obranimline3 = keyframes`
  0% {
    opacity: 1;
    width: 50%;
    transform: rotate(-36deg) translateX(14px);
  }
  
  100% {
    transform: rotate(0);
    width: 100%;
    opacity: 1;
  }
`;

export default {
  Burger: styled.div`
    width: 25px;
    height: 20px;
    top: ${({ isHide }) => (isHide ? '25%' : '50%')};
    transform: ${({ isHide }) =>
      isHide ? 'translateY(0)' : 'translateY(-50%)'};
    position: absolute;
    cursor: pointer;
    left: 15px;

    &:hover div {
      background-color: ${props => props.theme.burgerLineColorActive};
    }

    @media ${device.tablet} {
      top: 20px;
      left: 20px;
      transform: translateY(0);
      position: fixed;
    }
  `,
  Line1: styled.div`
    width: 100%;
    position: absolute;
    background-color: ${props => props.theme.burgerLineColor};
    height: 4px;
    transform-origin: right center;
    top: 0;
    border-radius: 10px;
    transition: background-color 0.1s linear;
    animation: ${props =>
      props.isAnim
        ? props.isHide
          ? css`
              ${animline1} 0.1s ease-in-out forwards
            `
          : css`
              ${obranimline1} 0.1s ease-in-out forwards
            `
        : ''};

    @media ${device.tablet} {
      animation: none;
    }
  `,
  Line2: styled.div`
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 10px;
    position: absolute;
    background-color: ${props => props.theme.burgerLineColor};
    transition: background-color 0.1s linear;
    height: 4px;
  `,
  Line3: styled.div`
    width: 100%;
    bottom: 0;
    border-radius: 10px;
    position: absolute;
    transform-origin: right center;
    background-color: ${props => props.theme.burgerLineColor};
    height: 4px;
    transition: background-color 0.1s linear;
    animation: ${props =>
      props.isAnim
        ? props.isHide
          ? css`
              ${animline3} 0.1s ease-in-out forwards
            `
          : css`
              ${obranimline3} 0.1s ease-in-out forwards
            `
        : ''};

    @media ${device.tablet} {
      animation: none;
    }
  `,
};
