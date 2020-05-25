import styled from 'styled-components';
import transition from 'styled-transition-group';

export default {
  SelectList: transition.div`
    position: absolute;
    width: 100px;
    top: ${({ isHide }) => (isHide ? '-50%' : '70%')};
    z-index: 1000;
    left: ${({ isHide }) => (isHide ? '100%' : '50%')};
    transform: ${({ isHide }) =>
      isHide ? 'translate(0, 0) scale(1)' : 'translate(-50%, 0) scale(1)'};
    overflow: hidden;
    border-radius: 15px;
    transition: transform 0.1s linear;
    
    &:enter {
        transform: translate(-50%, 0) scale(0);
      }
      
      &:enter-active {
        transform: translate(-50%, 0) scale(1);
      }
      
      &:exit {
        transform: translate(-50%, 0) scale(1);
      }
      
      &:exit-active {
        transform: translate(-50%, 0) scale(0);
      }
  `,
  SelectListItem: styled.div`
    width: 100%;
    cursor: pointer;
    display: flex;
    padding: 5px 0;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0.45);
    transition: background-color 0.1s linear;

    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
    }
  `,
};
