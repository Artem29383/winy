import React from 'react';
import PropTypes from 'prop-types';
import Tab from 'pages/ProfilePage/Tabs/Tab';
import routes from 'constants/routes';
import S from './Tabs.styled';

const Tabs = ({ uid }) => {
  const tabs = [
    {
      to: `${routes.about}`,
      text: 'About',
    },
    {
      to: `/photos`,
      text: 'photos',
    },
    {
      to: `/questions`,
      text: 'questions',
    },
  ];
  return (
    <S.UserTabs>
      <S.UserTabsNavigation>
        <S.WrapperTabs>
          {tabs.map(tab => (
            <Tab key={tab.to} value={tab} uid={uid} />
          ))}
        </S.WrapperTabs>
      </S.UserTabsNavigation>
    </S.UserTabs>
  );
};

Tabs.propTypes = {
  uid: PropTypes.string.isRequired,
};

export default Tabs;
