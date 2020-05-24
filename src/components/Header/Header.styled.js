import styled from 'styled-components';
import { device } from 'constants/device';
import transition from 'styled-transition-group';
/* stylelint-disable */

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
      width: ${({ isHide }) => `${isHide ? '55px' : '290px'}`};
      height: 100vh;
      z-index: 10000;
    }
    @media ${device.tablet} {
      position: fixed;
      background-color: rgba(0, 0, 0, 0.6);
      width: 290px;
      transform: ${({ isHide }) =>
        `${isHide ? 'translateX(-102%)' : 'translateX(0)'}`};
      height: 100vh;
      z-index: 10000;
      transition: transform 0.2s linear;
    }
  `,
  NavigatorHeader: styled.div`
    width: 100%;
    height: ${({ isHide }) => isHide && '100px'};
    position: relative;

    @media ${device.tablet} {
      height: auto;
    }
  `,
  BackDrop: transition.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background-color: ${({ isHide }) =>
      `${isHide ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.5)'}`};
    transition: background-color 0.2s linear;
    
      &:appear {
        background-color: rgba(0,0,0,0);
      }
      
      &:enter {
        background-color: rgba(0,0,0,0);
      }
      
      &:enter-active {
        background-color: rgba(0,0,0,0.5);
      }
      
      &:exit {
        background-color: rgba(0,0,0,0.5);
      }
      
      &:exit-active {
        background-color: rgba(0,0,0,0);
      }
  `,
  NavigatorBlock: styled.div`
    flex-shrink: 0;
    width: ${({ width }) => width};
    box-shadow: 2px 0 1px 0 rgba(0, 0, 0, 0.75);
    position: sticky;
    height: 100vh;
    top: 0;
    background-color: ${props => props.theme.navigatorColor};
    transition: background-color 0.1s linear,
      width 0.1s cubic-bezier(0.4, 0, 0.2, 1);

    @media ${device.tablet} {
      overflow-y: auto;
      width: 290px;
    }
  `,
  Title: styled.div`
    font-size: 30px;
    height: 60px;
    width: 100%;
    color: ${props => props.theme.navTitleColor};
    display: ${({ isHide }) => (isHide ? 'none' : 'flex')};
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition: color 0.1s linear;

    @media ${device.tablet} {
      display: flex;
    }
  `,
  ProfileInfoBlock: styled.div`
    display: ${({ isHide }) => (isHide ? 'none' : 'block')};
    width: 100%;

    @media ${device.tablet} {
      display: block;
    }
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
    object-fit: cover;
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
};
/* stylelint-enable */
