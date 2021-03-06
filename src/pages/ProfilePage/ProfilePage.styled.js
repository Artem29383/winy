import styled from 'styled-components';
import { device } from 'constants/device';

export default {
  Profile: styled.div`
    flex-grow: 1;

    @media ${device.laptop} {
      margin-left: 55px;
    }

    @media ${device.tablet} {
      margin: 0;
    }
  `,
  UserBlock: styled.div`
    height: 550px;
    display: flex;
    padding-top: 30px;
  `,
  UserPhotoBlock: styled.div`
    max-width: 550px;
    display: flex;
    width: 100%;
    padding: 0 50px 25px 50px;
  `,
  UpdateUserInfo: styled.div`
    color: ${props => props.theme.lpupdateUserInfo};
  `,
  UserName: styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
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
  Content: styled.div`
    width: 100%;
    padding-left: 50px;
  `,
  UserProfileContent: styled.div`
    width: 100%;
    color: #000;
  `,
};
