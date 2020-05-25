import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default {
  Tab: styled(NavLink)`
    display: block;
    color: ${props => props.theme.lpTab};
    transition: color 0.2s linear;
    flex-grow: 1;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;

    &::after {
      transition: height 0.2s linear;
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      border-radius: 10px 10px 0 0;
      height: 0;
      bottom: -3px;
      left: -1px;
      background-color: ${props => props.theme.lpAfterTab};
    }

    &.active {
      color: ${props => props.theme.lpTabActive};

      &::after {
        height: 7px;
      }
    }
  `,
};
