import styled from 'styled-components';
import colors from 'styles/colors';

export default {
  Form: styled.form`
    position: absolute;
    width: 350px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid ${colors.mineShaft};
    border-radius: 5px;
    background-color: ${colors.black};
    color: ${colors.silverChalice};
    padding-bottom: 10px;
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
      color: ${colors.silverChalice};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `,
};
