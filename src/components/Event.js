import "../styles/MainPage.css";
import { Link } from "react-router-dom";

const Event = ({
  props: {
    "img-url": imgUrl,
    "event-name": eventName,
    description,
    organization,
    id,
  },
}) => {
  return (
    <>
      <div className="container">
        <div className="card">
          <h4>{organization}</h4>
          <img src={imgUrl} alt={eventName} />
          <h4>{eventName}</h4>
          <p>{description}</p>
          <Link to={`/eventInfo/${id}`}>
            <span>Leer más</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Event;
