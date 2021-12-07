import React from 'react';
import MainPage from "./components/MainPage";
import NavMenu from "./components/NavMenu";
import UserInfo from "./components/UserInfo";

export const App = () => {
  return (
    <div>
      <NavMenu />
      <MainPage />
    </div>
  );
};

export default App;
