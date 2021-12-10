import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getData } from "../store/slices/database/index";
import { Spinner } from "../styles/spinnerStyleComp";
import UserEvent from "./UserEvent";
import { PrivateRoute } from "../routes/PrivateRoute";
import AuthContext from "../context/AuthContext";
import { UserInfCont } from "../styles/UserInfStyleComp";

const UserInfo = () => {
  const { data } = useSelector((state) => state.database);
  const { auth } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  console.log(auth);

  return (
    <PrivateRoute auth={auth}>
      <UserInfCont>
        <h2>{auth && auth.displayName}</h2>
        <h3>Eventos</h3>
        <div>
          {data === null ? (
            <Spinner />
          ) : (
            auth &&
            data
              .filter((el) => el.uid === auth.uid)
              .map((el) => <UserEvent key={el.id} props={el} />)
          )}
        </div>
      </UserInfCont>
    </PrivateRoute>
  );
};

export default UserInfo;
