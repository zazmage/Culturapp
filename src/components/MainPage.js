import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/slices/database/index";
import Event from "./Event";

const MainPage = () => {
  const { data } = useSelector((state) => state.database);
  const dispatch = useDispatch();

  useEffect(() => {
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
          <p>Cargando</p>
        ) : (
          data.map((el) => <Event key={el.id} props={el} />)
        )}
      </div>
    </>
  );
};

export default MainPage;
