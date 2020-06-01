import styled from 'styled-components';

export const Text = styled.div`
  transform: scale(0) translateX(-50%);
  transform-origin: center;
  transition: transform 0.1s ease-in-out;
  position: absolute;
  border-radius: 2px;
  padding: 5px;
  display: flex;
  text-align: center;
  top: ${({ top }) => top};
  left: 50%;
  color: #fafafa;
  min-width: ${({ minWidth }) => minWidth};
  font-size: 9px;
  content: attr(data-text);
  background: rgba(0, 0, 0, 0.6);
`;

export default {
  ToolTip: styled.div`
    position: relative;

    &:hover ${Text} {
      transition: transform 0.1s ease-in-out 0.5s;
      transform: scale(1) translateX(-50%);
    }
  `,
};
