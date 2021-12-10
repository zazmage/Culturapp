import React from 'react';
import "../styles/MainPage.css";
import { Link } from "react-router-dom";
import { Card, ContentCard, H4, IMG, MasInfo, TitleFecha } from '../styles/StyleMainpage';

const Event = ({
  props: {
    "img-url": imgUrl,
    "event-name": eventName,
    organization,
    date,
    id
  },

  fecha = () =>{
    var time = new Date(date[0])
    return time.toLocaleString();
  }

}) => {
  return (
    <>
      <ContentCard>
        <Card>
          <H4>{organization}</H4>
          <H4>{eventName}</H4>
          <IMG src={imgUrl} alt={eventName} />
          <TitleFecha>{fecha()}</TitleFecha>
          <Link to={`/eventInfo/${id}`}>
            <MasInfo>
              <i className="large material-icons">border_clear</i>
            </MasInfo>
          </Link>
        </Card>
      </ContentCard>
    </>
  );
};

export default Event;
