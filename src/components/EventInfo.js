import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getData } from "../store/slices/database";
import "../styles/MainPage.css";
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
      <Link to="/">
        <div className="exit"><i className="material-icons">chevron_left</i></div>
      </Link>
      {eventSelect === null ? (
        <h3>Cargando...</h3>
      ) : (
        <>
          <div className="cont-eventinfo">
            <Event key={eventSelect.id} props={eventSelect} />
          </div>
          <h3 className="relacionados">Productos relacionados</h3>

          <div className="cont-relacionados">
            {data
              .filter((el) => el.category === eventSelect.category)
              .map((el) => (
                  <div className="card-info" key={el.id}>
                    <h4>{el["event-name"]}</h4>
                    <img src={el["img-url"]} alt={el["event-name"]} />
                    <Link to={`/eventInfo/${el.id}`}>
                      <span>Leer más</span>
                    </Link>
                  </div>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default EventInfo;
