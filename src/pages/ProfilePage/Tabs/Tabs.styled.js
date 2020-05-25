import styled from 'styled-components';

export default {
  UserTabs: styled.div``,
  UserTabsNavigation: styled.div`
    border-bottom: ${props => `3px solid ${props.theme.lpTabsNavigation}`};
  `,
  WrapperTabs: styled.div`
    max-width: 600px;
    display: flex;
    justify-content: space-between;

    & a {
      text-decoration: none;
    }
  `,
};
