import styled from 'styled-components';
import colors from 'styles/colors';

export default {
  Icon: styled.svg`
    width: 20px;
    height: 20px;
    fill: ${colors.silverChalice};
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 1000;

    &:hover {
      fill: ${colors.pizazz};
    }
  `,
};
