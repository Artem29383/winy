import styled from 'styled-components';
import transition from 'styled-transition-group';

export default {
  Overlay: transition.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.6);
    z-index: 1000;
    overflow: hidden;
    transition: background-color 200ms linear;
    
     &:enter {
        background-color: rgba(0,0,0,0.0);
      }
      
      &:enter-active {
        background-color: rgba(0,0,0,0.6);
      }
      
      &:exit {
        background-color: rgba(0,0,0,0.6);
      }
      
      &:exit-active {
        background-color: rgba(0,0,0,0);
      }
  `,
  Modal: transition.div`
    max-width: ${({ width }) => `${width}px`};
    height: auto;
    z-index: 1000;
    width: 100%;
    border-radius: 20px;
    position: relative;
    top: ${({ top }) => top};
    transform: scale(1);
    background-color: ${props => props.theme.modalBgc};
    margin: 0 auto;
    transition: transform 200ms ease-in-out;
      
      &:appear {
        transform: scale(0);
      }
      
      &:enter-active {
        transform: scale(1);
      }
      
      &:exit {
        transform: scale(1);
      }
      
      &:exit-active {
        transform: scale(0);
      }
  `,
  BackDrop: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  `,
  Header: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60px;
    position: relative;
  `,
  Title: styled.span`
    font-size: 24px;
    color: ${props => props.theme.modalTitle};
  `,
  Body: styled.div`
    width: 100%;
    min-height: 50px;
    height: ${({ heightBody }) => `${heightBody}px`};
    position: relative;
  `,
  Footer: styled.div`
    width: 100%;
    display: flex;
    padding: 10px 0;
    justify-content: center;
  `,
  ButtonWrap: styled.div`
    max-width: 100px;
    margin: 0 10px;
  `,
};
