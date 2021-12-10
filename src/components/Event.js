import React from 'react';
import "../styles/MainPage.css";
import { Link } from "react-router-dom";
import { FormContainer } from '../styles/StyledComp';

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
      <FormContainer>
          <h4>{organization}</h4>
          <img src={imgUrl} alt={eventName} />
          <h4>{eventName}</h4>
          <p>{description}</p>
          <Link to={`/eventInfo/${id}`}>
            <span>Leer más</span>
          </Link>
      </FormContainer>
    </>
  );
};

export default Event;
