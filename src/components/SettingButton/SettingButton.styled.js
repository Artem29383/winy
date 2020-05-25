import styled from 'styled-components';
import { device } from 'constants/device';

export default {
  Setting: styled.div`
    z-index: 1000;
    position: absolute;
    display: flex;
    top: ${({ isHide }) => (isHide ? '60%' : '50%')};
    right: ${({ isHide }) => (isHide ? '50%' : '20px')};
    transform: ${({ isHide }) =>
      isHide ? 'translate(50%, 0)' : 'translateY(-50%)'};

    @media ${device.tablet} {
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
    }
  `,
};
