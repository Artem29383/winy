import styled from 'styled-components';

export default {
  Images: styled.div`
    width: 100%;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    margin-bottom: 10px;
  `,
};
