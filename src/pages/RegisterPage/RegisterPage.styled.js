import styled from 'styled-components';
import { device } from 'constants/device';

export default {
  Form: styled.form`
    position: absolute;
    width: 350px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid ${props => props.theme.formBorder};
    border-radius: 5px;
    background-color: ${props => props.theme.formBackground};
    color: ${props => props.theme.textColor};
    padding-bottom: 10px;
    transition: background-color 0.2s linear, color 0.2s linear;

    &.error {
      border: 2px solid ${props => props.theme.error};
    }

    @media ${device.mobileM} {
      margin-top: 50px;
      width: 300px;
    }
  `,
  InputWrapper: styled.div`
    width: 100%;
    padding: 10px 25px;

    a {
      text-decoration: none;
    }
  `,
  Text: styled.div`
    font-size: 22px;
    text-align: center;
    text-decoration: none;

    &.link {
      cursor: pointer;
      color: ${props => props.theme.textColor};
      text-decoration: none;
      transition: color 0.2s linear;

      &:hover {
        text-decoration: underline;
      }
    }
  `,
  Error: styled.div`
    font-size: 22px;
    text-align: center;
    color: ${props => props.theme.error};
  `,
  Success: styled.div`
    font-size: 22px;
    text-align: center;
    color: ${props => props.theme.success};
  `,
};
