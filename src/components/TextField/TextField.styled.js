import styled from 'styled-components';
/* stylelint-disable */

export const InputField = styled.input`
  border: 1px solid ${props => props.theme.inputBorder};
  padding: 16px 13px;
  border-radius: 5px;
  background-color: ${props => props.theme.inputBackground};
  transition: box-shadow 0.1s linear, color 0.2s linear,
    background-color 0.2s linear;
  width: 100%;
  color: ${props => props.theme.inputTextColor};

  &.error {
    border: 2px solid ${props => props.theme.error};
  }

  &.settings {
    background-color: #fff;

    &.error {
      border: 2px solid ${props => props.theme.error};
    }
  }
`;

export const Label = styled.label`
  color: ${props => props.theme.inputTextColor};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 13px;
  pointer-events: none;
  background-color: ${props => props.theme.inputBackground};
  transition: transform 0.1s linear, color 0.1s linear,
    background-color 0.2s linear;

  &.settings {
    background-color: #fff;
  }
`;

export default {
  Group: styled.div`
    position: relative;
    font-size: 18px;
    border-radius: 5px;

    & ${InputField}:focus {
      border: 1px solid ${props => props.theme.inputTextColor};
      box-shadow: inset 0 0 1px 1.5px rgb(255, 139, 0);
    }

    &
      ${InputField}:focus
      + ${Label},
      ${InputField}:not(:placeholder-shown)
      + ${Label} {
      color: ${props => props.theme.inputTextColor};
      transform: translateY(-220%);
      padding: 0 3px;
      font-size: 14px;
    }
  `,
  Error: styled.div`
    margin-top: 10px;
    color: ${props => props.theme.error};
    font-size: 16px;
    text-align: center;
  `,
};
/* stylelint-enable */
