import styled from 'styled-components';

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
};
