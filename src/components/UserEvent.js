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
    <div>
      <img style={{ width: "200px" }} src={imgUrl} alt={eventName} />
      <h4>{eventName}</h4>
      <h4>{organization}</h4>
    </div>
  );
};

export default UserEvent;
