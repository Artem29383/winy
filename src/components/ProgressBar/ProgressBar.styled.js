import styled from 'styled-components';

export default {
  Bar: styled.div`
    width: 200px;
    height: 20px;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props => props.theme.progressBarBgc};
  `,
  Progress: styled.div`
    left: 0;
    height: 20px;
    background: linear-gradient(to left, #f2709c, #ff9472);
    width: ${({ width }) => `${width}px`};
    transition: width 0.1s linear;
  `,
};
