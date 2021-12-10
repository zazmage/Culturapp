import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { NavigationBar } from '../styles/StyledComp';
import { Show } from './ShowEvent';

const NavMenu = () => {
  let [, setSearchParams] = useSearchParams();

  const [showEvent, setShowEvent] = useState(false)

  const openEvent = () => {
    setShowEvent(prev => !prev);
  }

  const handleClick = ({ target }) =>
    setSearchParams({ category: target.name });

  return (
    <NavigationBar>
      <Link to="/">Culturapp</Link>
      <button onClick={openEvent} name="cinema">
        C
      </button>
      <Show showEvent={showEvent} setShowEvent={setShowEvent} />
      <button onClick={handleClick} name="theater">
        T
      </button>
      <button onClick={handleClick} name="music">
        M
      </button>
      <button onClick={handleClick} name="login-signup">
        <img src='https://res.cloudinary.com/dxben47m9/image/upload/v1639104744/culturapp/logosimple_rdpot8.png' />
      </button>
      <Link to="/login">Iniciar sesión</Link>
      <Link to="/addEvent">Agregar evento</Link>
      <Link to="/userInfo">UserInfo</Link>
    </NavigationBar>
  );
};

export default NavMenu;
