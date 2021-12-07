import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getData } from "../store/slices/database/index";
import { Spinner } from "../styles/spinnerStyleComp";
import UserEvent from "./UserEvent";

const UserInfo = () => {
  const { data } = useSelector((state) => state.database);
  const dispatch = useDispatch();

  useEffect(() => {
    // Get data se trae la información de la base de datos y se despacha al reducer
    dispatch(getData());
  }, [dispatch]);
  return (
    <div>
      <h2>UserInfo</h2>
      <p>Imagen de perfil</p>
      <p>Nombre de usuario</p>
      <p>Eventos</p>
      <div>
        {data === null ? (
          <Spinner />
        ) : (
          data
            .filter(
              (el) => el.organization === "Teatro oficina central de los sueños"
            )
            .map((el) => <UserEvent key={el.id} props={el} />)
        )}
      </div>
    </div>
  );
};

export default UserInfo;
