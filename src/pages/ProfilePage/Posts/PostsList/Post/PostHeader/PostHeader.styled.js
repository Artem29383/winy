import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default {
  PostHeader: styled.div`
    display: flex;
    position: relative;
  `,
  Ava: styled.div``,
  AvaWrap: styled.div`
    width: 70px;
    height: 70px;
  `,
  AvaIMG: styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  `,
  Title: styled.div`
    width: 100%;
    margin-left: 15px;
    padding-top: 5px;
  `,
  Name: styled.div`
    display: flex;
  `,
  Link: styled(NavLink)`
    font-size: 14px;
    text-decoration: none;
    color: #2a5885;
    line-height: 26px;

    &:hover {
      text-decoration: underline;
    }
  `,
  Time: styled.div`
    color: #939393;
    font-size: 14px;
  `,
};
