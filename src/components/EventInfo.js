import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getData } from "../store/slices/database";
import "../styles/MainPage.css";
import { Spinner } from "../styles/spinnerStyleComp";
import {
  Card1, CardInfo,
  ContentCard1,
  ContRelacionados,
  DivTitle, H41, H42, IMG1,
  IMG2,
  MasInfo,
  P, RedesIcons,
  RedesSociales,
  TitleFecha1
} from "../styles/StyleMainpage";

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

  const fecha = () => {
    var time = new Date(eventSelect.date[0])
    return time.toLocaleString();
  }

  return (
    <>
      <Link to="/">
        <div className="exit">
          <i className="material-icons">chevron_left</i>
        </div>
      </Link>
      {eventSelect === null ? (
        <Spinner />
      ) : (
        <>
          <ContentCard1>
            <Card1>
              <IMG1 src={eventSelect["img-url"]} alt={eventSelect.eventName} />
              <DivTitle>
                <H41>{eventSelect.organization}</H41>
                <H41>{eventSelect["event-name"]}</H41>
                <TitleFecha1>{fecha()}</TitleFecha1>
                <TitleFecha1>{eventSelect.address}</TitleFecha1>
                <H41>{eventSelect.price}</H41>
                <P>{eventSelect.description}</P>
              </DivTitle>
              <RedesSociales>
                <RedesIcons href={`https://api.whatsapp.com/send?phone=${eventSelect.cellphone}`}><i className="large material-icons">whatsapp</i></RedesIcons>
                <RedesIcons href=""><i className="large material-icons">facebook</i></RedesIcons>
                <RedesIcons href=""><i className="large material-icons">travel_explore</i></RedesIcons>
              </RedesSociales>
            </Card1>
          </ContentCard1>

          <ContRelacionados>
            {data
              .filter((el) => el.category === eventSelect.category)
              .map((el) => (
                <CardInfo className="card-info" key={el.id}>
                  <H42>{el["event-name"]}</H42>
                  <IMG2 src={el["img-url"]} alt={el["event-name"]} />
                  <Link to={`/eventInfo/${el.id}`}>
                    <MasInfo>
                      <i className="large material-icons">border_clear</i>
                    </MasInfo>
                  </Link>
                </CardInfo>
              ))}
          </ContRelacionados>
        </>
      )}
    </>
  );
};

export default EventInfo;
