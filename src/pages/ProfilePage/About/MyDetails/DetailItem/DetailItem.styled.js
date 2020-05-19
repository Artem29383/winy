import styled from 'styled-components';

export default {
  DetailsItem: styled.li`
    padding: 20px 0;
    width: 100%;
    border-bottom: 2px solid #efefef;
    list-style: none;
    display: flex;
    align-items: center;
    font-family: 'Roboto Light', serif;
  `,
  TitleItem: styled.div`
    color: #d3d3d3;
    font-size: 16px;
    flex-shrink: 1;
  `,
  TextItem: styled.div`
    font-size: 14px;
    margin-left: 15px;
    cursor: pointer;
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 350px;
  `,
  Input: styled.input`
    margin-left: 15px;
    border: none;
    border-bottom: 1px solid lightgray;
    padding: 0 5px 0 5px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
  `,
};
