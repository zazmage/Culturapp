import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Event from "./Event";


const EventInfo = () => {

  const { data } = useSelector((state) => state.database);
  const [prodSelec, setProdSelec] = useState(null);
  const params = useParams();


  useEffect(() => {
    if (data !== null) {
      setProdSelec(data.filter((el) => el.eventName === params.eventsName)[0]);
    }
  }, [data, params.eventsName]);


  return (
    <>
      <h2>Soy un EventInfo</h2>
      <Link to="/">
        <button>Atras</button>
      </Link>
      {prodSelec === null ? (
        <h3>Cargando...</h3>
      ) : (
        <h1>hi</h1>
      )}
    </>
  );
};

export default EventInfo;
