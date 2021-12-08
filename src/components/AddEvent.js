import React from "react";
import { PrivateRoute } from "../routes/PrivateRoute";

const AddEvent = () => {
  return (
    <PrivateRoute>
      <div>
        <h2>Soy un AddEvent</h2>
        <p>Formulario para añadir un nuevo evento</p>
        <p>event-name</p>
        <p>category</p>
        <p>date</p>
        <p>organization</p>
        <p>address</p>
        <p>telephone</p>
        <p>cellphone</p>
        <p>email</p>
        <p>description</p>
        <p>img-url</p>
        <p>price</p>
        <p>website</p>
      </div>
    </PrivateRoute>
  );
};

export default AddEvent;
