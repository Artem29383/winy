import styled from 'styled-components';

export const Label = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  display: inline-block;
  width: 100%;
  background: ${props => props.theme.fileIBgc};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  color: ${props => props.theme.fileIColor};
  padding: 10px 10px;
  text-transform: uppercase;
  font-size: 12px;
`;

export default {
  Wrapper: styled.div`
    position: relative;
    width: 100%;
    cursor: pointer;
    text-align: center;
  `,
  Input: styled.input`
    display: inline-block;
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    cursor: pointer !important;
  `,
};
