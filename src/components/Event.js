import React from 'react';
import "../styles/MainPage.css";
import { Link } from "react-router-dom";
import { Card, ContentCard, DivTitle3, H4, IMG, MasInfo, TitleFecha } from '../styles/StyleMainpage';

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
          <IMG src={imgUrl} alt={eventName} />
          <DivTitle3>
      
          <H4>{eventName}</H4>
          <TitleFecha>{fecha()}</TitleFecha>
          </DivTitle3>
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
