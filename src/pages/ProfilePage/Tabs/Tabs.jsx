import React, { useState } from 'react';
import Tab from 'pages/ProfilePage/Tabs/Tab';
import S from './Tabs.styled';

const Tabs = () => {
  const [indexTab, setIndexTab] = useState(0);
  const tabs = ['about', 'photos', 'questions'];
  return (
    <S.UserTabs>
      <S.UserTabsNavigation>
        <S.WrapperTabs>
          {tabs.map((tab, i) => (
            <Tab
              key={tab}
              value={tab}
              currentTabIndex={indexTab}
              setIndex={setIndexTab}
              index={i}
            />
          ))}
        </S.WrapperTabs>
      </S.UserTabsNavigation>
    </S.UserTabs>
  );
};

export default Tabs;
