import styled from 'styled-components';
import { device } from 'constants/device';

export default {
  Icon: styled.svg`
    width: 20px;
    height: 20px;
    fill: ${props => props.theme.textColor};
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 1000;

    &:hover {
      fill: ${props => props.theme.inputTextColor};
    }
  `,
  Sun: styled.svg`
    width: 30px;
    height: 30px;
    fill: ${props => props.theme.sunInitColor};
    transition: fill 0.2s linear;
  `,
  Moon: styled.svg`
    width: 30px;
    height: 30px;
    transition: fill 0.2s linear;
    fill: ${props => props.theme.moonColor};
  `,
  ProfileNav: styled.svg`
    width: 30px;
    fill: ${props => props.theme.profileNavColor};
    height: 30px;
    transition: fill 0.1s linear;
    margin: ${({ isHide }) => (isHide ? '0 10px 0 15px' : '0 10px 0 35px')};

    @media ${device.tablet} {
      margin: 0 10px 0 35px;
    }
  `,
  SettingNav: styled.svg`
    cursor: pointer;
    fill: ${props => props.theme.settingNav};
    width: 30px;
    height: 30px;
    transform: ${({ active }) => (active ? 'rotate(360deg)' : 'rotate(0)')};
    transition: fill 0.1s linear, transform 0.2s linear;

    &:hover {
      fill: ${props => props.theme.settingNavActive};
    }
  `,
  SymbolEditor: styled.svg`
    width: 30px;
    height: 30px;
    fill: #000;
  `,
  AddImage: styled.svg`
    width: 30px;
    height: 30px;
    fill: #838383;
    transition: fill 0.2s linear;
  `,
  CloseImage: styled.svg`
    width: 15px;
    height: 15px;
    fill: #fff;
    opacity: 0.3;
    transition: opacity 0.2s linear;
  `,
  Like: styled.svg`
    width: 35px;
    height: 35px;
    fill: #67707a;
    transition: fill 0.2s linear;
  `,
  DisLike: styled.svg`
    width: 35px;
    fill: #67707a;
    height: 35px;
    transition: fill 0.2s linear;
  `,
  NoPosts: styled.svg`
    width: 75px;
    height: 75px;
    fill: #656565;
  `,
};
