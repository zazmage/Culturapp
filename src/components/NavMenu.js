import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const NavMenu = () => {
  let [, setSearchParams] = useSearchParams();

  const handleClick = ({ target }) =>
    setSearchParams({ category: target.name });

  return (
    <div>
      <Link to="/">Culturapp</Link>
      <button onClick={handleClick} name="cinema">
        Cine
      </button>
      <button onClick={handleClick} name="theater">
        Teatro
      </button>
      <button onClick={handleClick} name="music">
        Música
      </button>
      <Link to="/login">Iniciar sesión</Link>
      <Link to="/addEvent">Agregar evento</Link>
      <Link to="/userInfo">UserInfo</Link>
    </div>
  );
};

export default NavMenu;
