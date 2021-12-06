import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getData } from "../store/slices/database";
import Event from "./Event";

const EventInfo = () => {
  const [eventSelect, setEventSelect] = useState(null);
  const { data } = useSelector((state) => state.database);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    if (data !== null) {
      setEventSelect(data.find((el) => el.id === params.eventId));
    }
  }, [data, params.eventId]);

  return (
    <>
      <h2>Soy un EventInfo</h2>
      <Link to="/">
        <button>Atras</button>
      </Link>
      {eventSelect === null ? (
        <h3>Cargando...</h3>
      ) : (
        <div>
          <h1>{eventSelect["event-name"]}</h1>
          <p>{eventSelect["price"]}</p>
          <div>
            {/* {data.filter(el => el.category === category).map(el => <eventos de la misma categoria />)} */}
          </div>
        </div>
      )}
    </>
  );
};

export default EventInfo;
