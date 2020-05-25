import styled from 'styled-components';
/* stylelint-disable */

export const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 12px;
  pointer-events: none;
  color: #9b9b9b;
`;

export default {
  Group: styled.div`
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
  `,
  Textarea: styled.textarea`
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #d2d2d2;
    outline: 0;
    resize: none;
    font-size: 16px;
    color: #212121;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ ${Label} {
      font-size: 16px;
      cursor: text;
      top: 20px;
    }

    &:focus ~ ${Label} {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 12px;
      color: #9b9b9b;
    }

    &:focus {
      padding-bottom: 6px;
      border-bottom: 2px solid #009788;
    }
  `,
};
/* stylelint-enable */
