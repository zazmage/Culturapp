import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/slices/database/index";
import { Spinner } from "../styles/spinnerStyleComp";
import Event from "./Event";

const MainPage = () => {
  // Use selector se trae el estado de un reductor dado
  const { data } = useSelector((state) => state.database);
  const dispatch = useDispatch();

  useEffect(() => {
    // Get data se trae la información de la base de datos y se despacha al reducer
    dispatch(getData());
  }, [dispatch]);

  /*const [events, setEvents] = useState([]);

  const getData = () => {
    getDocs(collection(db, "eventsdb"))
      .then((res) => {
        const database = res.docs.map((el) => el.data());
        setEvents(database);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
    return
  }, [])*/

  //console.log(data);

  return (
    <>
      <div className="main-contenedor">
        {data === null ? (
          <Spinner />
        ) : (
          data.map((el) => <Event key={el.id} props={el} />)
        )}
      </div>
    </>
  );
};

export default MainPage;
