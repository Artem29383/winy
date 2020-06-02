import styled from 'styled-components';

export default {
  Content: styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 20px 50px;
  `,
  Graphics: styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    box-shadow: 1px 2px 3px 0 rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    padding: 25px;
  `,
  GraphicsHeader: styled.div`
    color: #000;
  `,
  GraphicsBody: styled.div`
    color: #000;
    position: relative;
    width: 100%;
    min-height: 150px;
  `,
};
