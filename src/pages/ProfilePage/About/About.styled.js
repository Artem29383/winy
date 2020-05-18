import styled from 'styled-components';

export default {
  Content: styled.div`
    width: 100%;
    color: #000;
    padding-top: 20px;
    min-height: 560px;
    display: flex;
  `,
  MyDetails: styled.div`
    flex-basis: 40%;
    padding: 10px 15px 0 50px;
  `,
  TitleDetails: styled.div`
    width: 100%;
    font-size: 32px;
    border-bottom: 2px solid #efefef;
    padding-bottom: 20px;
  `,
  DetailsList: styled.ul`
    width: 100%;
  `,
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
    font-size: 28px;
  `,
  TextItem: styled.div`
    font-size: 28px;
    margin-left: 30px;
  `,
};
