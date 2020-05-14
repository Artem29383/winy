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
  Photo: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `,
  Img: styled.img`
    border-radius: 50%;
    border: 3px solid black;
    overflow: hidden;
    width: 60%;
    height: 60%;
  `,
  UpdateUserInfo: styled.div`
    color: #000;
  `,
  UserName: styled.div`
    width: 100%;
    height: 30px;
  `,
  Text: styled.div`
    font-size: 26px;
    color: #000;
  `,
  UserInfoBlock: styled.div`
    width: 100%;
  `,
  UserActionsBlock: styled.div`
    max-width: 20%;
    width: 100%;
  `,
};
