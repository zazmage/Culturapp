import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { NavigationMenu, NavigationMenuLogo } from "../styles/NavStyleComp";
import logo from "../assets/logo.svg";
import mainLogo from "../assets/mainLogo.svg";
import leftArrow from "../assets/leftArrow.svg";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const NavMenu = () => {
  let [, setSearchParams] = useSearchParams();
  const { auth } = useContext(AuthContext);

  const handleClick = ({ target }) =>
    setSearchParams({ category: target.name });
  const [navMenuVisible, setNavMenuVisible] = useState(false);
  const handleNavMenu = () =>
    setNavMenuVisible((navMenuVisible) => !navMenuVisible);

  return (
    <>
      <NavigationMenuLogo
        style={{ visibility: navMenuVisible ? "hidden" : "visible" }}
        onClick={handleNavMenu}
      >
        <img src={logo} alt="Logo" />
      </NavigationMenuLogo>
      <NavigationMenu
        style={{ visibility: navMenuVisible ? "visible" : "hidden" }}
      >
        <div className="back-btn">
          <img src={leftArrow} alt="Left arrow" onClick={handleNavMenu} />
        </div>
        <div className="main-page-btn">
          <Link to="/">
            <img src={mainLogo} alt="Main logo" />
          </Link>
        </div>
        <div className="nav-btn" style={{ display: auth ? "none" : "auto" }}>
          <Link to="/login">Iniciar sesión</Link>
        </div>
        <div className="nav-btn" style={{ display: auth ? "auto" : "none" }}>
          <Link to="/userInfo">UserInfo</Link>
        </div>
        <div className="nav-btn" style={{ display: auth ? "auto" : "none" }}>
          <Link to="/addEvent">Agregar evento</Link>
        </div>
        <div className="category-btn">
          <p onClick={handleClick} name="cinema">
            Cine
          </p>
        </div>
        <div className="category-btn">
          <p onClick={handleClick} name="theater">
            Teatro
          </p>
        </div>
        <div className="category-btn">
          <p onClick={handleClick} name="music">
            Música
          </p>
        </div>
      </NavigationMenu>
    </>
  );
};

export default NavMenu;
