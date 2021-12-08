import React, { useContext } from "react";
import MainPage from "./components/MainPage";
import NavMenu from "./components/NavMenu";
import UserInfo from "./components/UserInfo";
import AuthContext from "./context/AuthContext";

export const App = () => {
  const { auth, handleAuth } = useContext(AuthContext);
  console.log(auth);
  return (
    <div>
      <NavMenu />
      <MainPage />
    </div>
  );
};

export default App;
