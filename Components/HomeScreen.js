import React, { useEffect, useState } from 'react';
import HomeTab from './Tabs/HomeTab';
import UsersTabs from './Tabs/UsersTabs';
import ContactTab from './Tabs/ContactTab';

function HomeScreen({ logout }) {
  const [showLoginSucess, setLoginSucess] = useState(true);
  const [selectedTab, setselectedTab] = useState('home');
  const [slectedTabContent, setslectedTabContent] = useState([<HomeTab />]);
  const [tabs] = useState([
    {
      tabName: 'Home',
      value: 'home',
      navigateTo: <HomeTab />,
    },
    {
      tabName: 'Users',
      value: 'users',
      navigateTo: <UsersTabs />,
    },
    {
      tabName: 'Contact',
      value: 'contact',
      navigateTo: <ContactTab />,
    },
  ]);
  useEffect(() => {
    setTimeout(() => {
      setLoginSucess(false);
    }, 2000);
    //eslint-disable-next-line
  }, []);

  return (
    <div className={'homescreenWrap'}>
      <div className="user-title">
        <img
          className="logo"
          src="https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH"
        ></img>

        {!showLoginSucess && (
          <span style={{}} onClick={() => logout()} className="log-out">
            Logout
          </span>
        )}
      </div>
      <div>
        {showLoginSucess && (
          <div className="SucessMesage">
            <p>Login Suceess, Welcome to Wissen Connect</p>
          </div>
        )}
      </div>
      <div>
        <ul className="Tabs">
          {tabs.map((tab, i) => {
            return (
              <li
                className={selectedTab === tab.value ? 'activeTab' : 'tab'}
                tab={tab.value}
                onClick={(e) => {
                  setselectedTab(tab.value);
                  setslectedTabContent(tab.navigateTo);
                }}
                key={i}
              >
                {tab.tabName}
              </li>
            );
          })}
        </ul>
        {slectedTabContent}
      </div>
    </div>
  );
}

export default HomeScreen;
