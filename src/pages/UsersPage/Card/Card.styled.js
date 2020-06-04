import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default {
  Link: styled(NavLink)`
    display: block;
    text-decoration: none;
  `,
  Card: styled.div`
    width: 100%;
    height: 300px;
    color: #000;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.75);
    margin: 20px 0;

    &:first-child {
      margin-top: 0;
    }
  `,
  ImageBlock: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 135px;
  `,
  Img: styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid black;
    object-fit: cover;
  `,
  Title: styled.div`
    font-size: 26px;
    text-align: center;
  `,
  FollowList: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    padding: 20px 50px;
  `,
  Followers: styled.div``,
  Following: styled.div``,
  FollowButton: styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
  `,
};
