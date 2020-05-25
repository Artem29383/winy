import styled from 'styled-components';

export default {
  UserStatus: styled.div`
    padding-top: 20px;
  `,
  StatusField: styled.div`
    font-size: 16px;
    color: ${props => props.theme.lpStatusField};
    display: flex;
    min-height: 36px;
    cursor: pointer;
    align-items: center;
    line-height: 1.5;
    max-width: 90%;
    background-color: rgba(90, 90, 90, 0.1);
    padding: 10px 15px;
    border-radius: 10px;
    word-break: break-word;
  `,
  DefaultStatus: styled.div`
    font-size: 16px;
    color: ${props => props.theme.textStatus};
    min-height: 36px;
    cursor: ${({ isOwner }) => isOwner && 'pointer'};
    align-items: center;
    word-break: break-word;
    line-height: 1.5;
    max-width: 90%;
    background-color: rgba(90, 90, 90, 0.1);
    padding: 10px 15px;
    border-radius: 10px;
  `,
};
