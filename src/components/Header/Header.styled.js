import styled, { keyframes, css } from 'styled-components';
/* stylelint-disable */

const animline1 = keyframes`
  0% {
    transform: rotate(0);
    width: 100%;
  }
  
  100% {
    width: 50%;
    transform: rotate(33deg) translateX(12px);
  }
`;

const obranimline1 = keyframes`
  0% {
    width: 50%;
    transform: rotate(33deg) translateX(12px);
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
    transform: rotate(-37deg) translateX(12px);
  }
`;

const obranimline3 = keyframes`
  0% {
    opacity: 1;
    width: 50%;
    transform: rotate(-37deg) translateX(12px);
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
  NavigatorHeader: styled.div`
    width: 100%;
    height: ${({ isHide }) => isHide && '100px'};
    position: relative;
  `,
  NavigatorBlock: styled.div`
    width: ${({ width }) => width};
    position: relative;
    box-shadow: 2px 0 1px 0 rgba(0, 0, 0, 0.75);
    height: 100%;
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
    position: absolute;
    background-color: ${props => props.theme.burgerLineColor};
    transition: background-color 0.1s linear;
    height: 4px;
  `,
  Line3: styled.div`
    width: 100%;
    bottom: 0;
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
