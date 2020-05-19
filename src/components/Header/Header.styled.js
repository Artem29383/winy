import styled, { keyframes, css } from 'styled-components';
import { device } from 'constants/device';
import transition from 'styled-transition-group';
/* stylelint-disable */

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

export const ItemText = styled.div`
  color: ${props => props.theme.navItemText};
  transition: color 0.1s linear;
`;

export const LeftBorder = styled.div`
  width: 3px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  transform-origin: bottom;
  transform: scale(0);
  background-color: ${props => props.theme.leftBorderColor};
  transition: background-color 0.1s linear, transform 0.2s linear;
`;

export default {
  HeaderOverlay: transition.div`
    @media ${device.laptop} {
      position: fixed;
      background-color: ${({ isHide }) =>
        `${isHide ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.6)'}`};
      width: ${({ isHide }) => `${isHide ? '55px' : '100%'}`};
      height: 100vh;
      z-index: 10000;
      transition: background-color 200ms linear;
      
      &:enter {
        background-color: rgba(0,0,0,0.0.6);
        width: 100%;
        position: fixed;
      }
      
      &:appear {
        background-color: rgba(0,0,0,0.6);
        width: 100%;
        position: fixed;
      }
      
      &:enter-active {
        background-color: rgba(0,0,0,0.6);
        width: 100%;
        position: fixed;
      }
      
      &:exit {
        background-color: rgba(0,0,0,0.6);
        width: 100%;
        position: fixed;
      }
      
      &:exit-active {
        background-color: rgba(0,0,0,0);
        width: 100%;
        position: fixed;
      }
    }
  `,
  NavigatorHeader: styled.div`
    width: 100%;
    height: ${({ isHide }) => isHide && '100px'};
    position: relative;
  `,
  BackDrop: styled.div`
    position: ${({ isHide }) => `${isHide ? 'static' : 'fixed'}`};
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  `,
  NavigatorBlock: styled.div`
    flex-shrink: 0;
    width: ${({ width }) => width};
    box-shadow: 2px 0 1px 0 rgba(0, 0, 0, 0.75);
    position: sticky;
    height: 100vh;
    top: 0;
    background-color: ${props => props.theme.navigatorColor};
    transition: background-color 0.1s linear, width 0.1s linear;
  `,
  Title: styled.div`
    font-size: 30px;
    height: 60px;
    width: 100%;
    color: ${props => props.theme.navTitleColor};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition: color 0.1s linear;
  `,
  ProfileInfoBlock: styled.div`
    width: 100%;
  `,
  PhotoUrl: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Img: styled.img`
    height: 120px;
    border-radius: 50%;
    border: ${({ theme }) => `3px solid ${theme.imgBorderColor}`};
    width: 120px;
    cursor: pointer;
    transition: border-color 0.1s linear;
  `,
  LoginUser: styled.div`
    height: 45px;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    color: ${props => props.theme.loginUserColor};
    font-size: 30px;
    font-weight: bold;
    transition: color 0.1s linear;
  `,
  Follows: styled.div`
    width: 100%;
    border: ${({ theme }) => `1px solid ${theme.followsBorderColor}`};
    border-right: 0;
    border-left: 0;
    padding: 15px 0;
    justify-content: center;
    align-items: center;
    display: flex;
    color: ${props => props.theme.followsColor};
    font-size: 20px;
    transition: color 0.1s linear, border-color 0.1s linear;
  `,
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
  `,
};
/* stylelint-enable */
