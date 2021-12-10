import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { GlobalStyle } from "./styles/StyledComp";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register";
import EventInfo from "./components/EventInfo";
import AddEvent from "./components/AddEvent";
import UserInfo from "./components/UserInfo";

ReactDOM.render(
  <AuthProvider>
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/eventInfo">
            <Route path=":eventId" element={<EventInfo />} />
          </Route>
          <Route path="/" element={<App />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addEvent" element={<AddEvent />} />
          <Route path="/userInfo" element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </AuthProvider>,
  document.getElementById("root")
);
