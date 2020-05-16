import React from 'react';
import Tab from 'pages/ProfilePage/Tabs/Tab';
import routes from 'constants/routes';
import S from './Tabs.styled';

const Tabs = () => {
  const tabs = [
    {
      to: `${routes.profileAbout}`,
      text: 'About',
    },
    {
      to: `${routes.profile}/photos`,
      text: 'photos',
    },
    {
      to: `${routes.profile}/questions`,
      text: 'questions',
    },
  ];
  return (
    <S.UserTabs>
      <S.UserTabsNavigation>
        <S.WrapperTabs>
          {tabs.map(tab => (
            <Tab key={tab.to} value={tab} />
          ))}
        </S.WrapperTabs>
      </S.UserTabsNavigation>
    </S.UserTabs>
  );
};

export default Tabs;
