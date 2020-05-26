import styled from 'styled-components';

export default {
  ButtonArrow: styled.div`
    position: absolute;
    padding: 5px;
    top: ${({ top }) => top};
    right: ${({ right }) => right};
    left: ${({ left }) => left};
    transform: translateY(-50%);
    margin: 30px auto;
    cursor: pointer;
    user-select: none;
    background: rgba(0, 0, 0, 0.3);
    height: 50px;
    width: 50px;
    border-radius: 50%;
    transition: background-color 0.2s linear;

    &:hover {
      background: rgba(0, 0, 0, 0.6);
    }

    &::after {
      content: '';
      position: absolute;
      z-index: 11;
      display: block;
      width: 25px;
      height: 25px;
      border-top: 4px solid #fff;
      border-left: 4px solid #fff;
      left: 50%;
      top: 50%;
      transform: ${({ deg }) => `translate(-50%, -50%) rotate(${deg}deg)`};
    }
  `,
};
