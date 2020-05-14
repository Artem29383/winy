import styled from 'styled-components';

export default {
  Tab: styled.div`
    color: #cdcdcd;
    transition: color 0.2s linear;
    flex-grow: 1;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    padding-bottom: 20px;
    padding-left: 30px;

    &::after {
      transition: height 0.2s linear;
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      border-radius: 10px 10px 0 0;
      height: 0;
      bottom: -3px;
      left: 0;
      background-color: #aa33e2;
    }

    &.active {
      color: #000;

      &::after {
        height: 7px;
      }
    }
  `,
};
