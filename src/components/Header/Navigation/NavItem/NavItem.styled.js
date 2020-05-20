import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'constants/device';

export const ItemText = styled.div`
  color: ${props => props.theme.navItemText};
  transition: color 0.1s linear;
  display: ${({ isHide }) => (isHide ? 'none' : 'block')};

  @media ${device.tablet} {
    display: block;
  }
`;

export const LeftBorder = styled.div`
  width: 3px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  transform-origin: ${({ direction }) => `${direction}`};
  transform: scale(0);
  background-color: ${props => props.theme.leftBorderColor};
  transition: background-color 0.1s linear, transform 0.3s linear;
`;

export default {
  Item: styled(NavLink)`
    width: 100%;
    padding: 10px 0;
    display: block;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    background-color: ${props => props.theme.navItemBgc};
    transition: background-color 0.1s linear;

    &.active {
      background-color: ${props => props.theme.navItemBgcActive};

      & ${ItemText} {
        color: ${props => props.theme.navItemTextActive};
      }

      & svg {
        fill: ${props => props.theme.profileNavColorActive};
      }

      & ${LeftBorder} {
        transform: scale(1);
      }
    }
  `,
  ItemContent: styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
  `,
};
