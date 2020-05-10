import styled from 'styled-components';
import colors from 'styles/colors';
/* stylelint-disable */

export const InputField = styled.input`
  border: 1px solid ${colors.mineShaft};
  padding: 16px 13px;
  border-radius: 5px;
  background-color: ${colors.tundora};
  transition: box-shadow 0.1s linear;
  width: 100%;
  color: ${colors.pizazz};

  &.error {
    border: 2px solid ${colors.error};
  }
`;

export const Label = styled.label`
  color: ${colors.pizazz};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 13px;
  pointer-events: none;
  background-color: ${colors.tundora};
  transition: transform 0.1s linear, color 0.1s linear;
`;

export default {
  Group: styled.div`
    position: relative;
    font-size: 18px;
    border-radius: 5px;

    & ${InputField}:focus {
      border: 1px solid ${colors.pizazz};
      box-shadow: inset 0 0 1px 1.5px rgb(255, 139, 0);
    }

    &
      ${InputField}:focus
      + ${Label},
      ${InputField}:not(:placeholder-shown)
      + ${Label} {
      color: ${colors.pizazz};
      transform: translateY(-220%);
      padding: 0 3px;
      font-size: 14px;
    }
  `,
  Error: styled.div`
    margin-top: 10px;
    color: ${colors.error};
    font-size: 16px;
    text-align: center;
  `,
};
/* stylelint-enable */
