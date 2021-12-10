import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import { PrivateRoute } from "../routes/PrivateRoute";
import { AddEvForm } from "../styles/AddEventStyleComp";

// https://api.cloudinary.com/v1_1/deildujgx

const AddEvent = () => {
  const { auth } = useContext(AuthContext);
  const { form, handleChange, handleImageFile, handleSubmit } = useForm();
  return (
    <PrivateRoute auth={auth}>
      <AddEvForm>
        <form onSubmit={(e) => handleSubmit(e, form)}>
          <label>
            <p>Nombre del evento</p>
            <input onChange={handleChange} name="event-name" />
          </label>
          <label>
            <p>Categoría</p>
            <input onChange={handleChange} name="category" />
          </label>
          <label>
            <p>Fecha</p>
            <input onChange={handleChange} name="date" />
          </label>
          <label>
            <p>Organización que realiza el evento</p>
            <input onChange={handleChange} name="organization" />
          </label>
          <label>
            <p>Dirección donde se realiza el evento</p>
            <input onChange={handleChange} name="address" />
          </label>
          <label>
            <p>Teléfono</p>
            <input onChange={handleChange} name="telephone" />
          </label>
          <label>
            <p>Celular</p>
            <input onChange={handleChange} name="cellphone" />
          </label>
          <label>
            <p>Email</p>
            <input onChange={handleChange} name="email" />
          </label>
          <label>
            <p>Página web</p>
            <input onChange={handleChange} name="webpage" />
          </label>
          <label>
            <p>Imágen publicitaria del evento</p>
            <input
              type="file"
              onChange={(e) => handleImageFile(e, auth.uid)}
              name="img-url"
            />
          </label>
          <label>
            <p>Descripción del evento</p>
            <textarea onChange={handleChange} name="description" />
          </label>
          <button type="submit">Continuar</button>
        </form>
      </AddEvForm>
    </PrivateRoute>
  );
};

export default AddEvent;
