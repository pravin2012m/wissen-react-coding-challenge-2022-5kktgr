import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import LoginScreen from './Components/LoginScreen';
import HomeScreen from './Components/HomeScreen';

const App = () => {
  const [showHomePage, setShowHomePage] = useState(false);
  return (
    <div>
      <div>
        <div>
          {!showHomePage ? (
            <LoginScreen setShowHomePage={setShowHomePage} />
          ) : (
            <HomeScreen logout={() => setShowHomePage(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
