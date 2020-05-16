import styled from 'styled-components';

export default {
  Profile: styled.div`
    flex-grow: 1;
  `,
  UserBlock: styled.div`
    height: 300px;
    display: flex;
    padding-top: 30px;
  `,
  UserPhotoBlock: styled.div`
    max-width: 300px;
    display: flex;
    width: 100%;
  `,
  UpdateUserInfo: styled.div`
    color: ${props => props.theme.lpupdateUserInfo};
  `,
  UserName: styled.div`
    width: 100%;
    height: 30px;
  `,
  Text: styled.div`
    font-size: 26px;
    color: ${props => props.theme.lptext};
  `,
  UserInfoBlock: styled.div`
    width: 100%;
  `,
  UserActionsBlock: styled.div`
    max-width: 20%;
    width: 100%;
  `,
};
