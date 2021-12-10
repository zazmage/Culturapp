import { UserEventCont } from "../styles/UserInfStyleComp";

const UserEvent = ({
  props: {
    "img-url": imgUrl,
    "event-name": eventName,
    description,
    organization,
    id,
  },
}) => {
  return (
    <UserEventCont>
      <img src={imgUrl} alt={eventName} />
      <h4>{eventName}</h4>
      <h4>{organization}</h4>
    </UserEventCont>
  );
};

export default UserEvent;
