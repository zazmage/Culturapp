import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import { FormContainer, FormUser } from "../styles/StyledComp";
import { PublicRoute } from "../routes/PublicRoute";

const Register = () => {
  const { auth, handleAuth } = useContext(AuthContext);
  const { form, handleChange } = useForm();
  const navigate = useNavigate();
  return (
    <PublicRoute auth={auth}>
      <FormContainer>
        <FormUser>
          <div className="formHead">
            <button className="persona">Persona</button>
            <button className="organizacion">Organización</button>
          </div>
          <div className="formData">
            <form
              id="register-form"
              onSubmit={(e) => handleAuth(e, form, navigate)}
            >
              <label htmlFor="name">Nombre:</label>
              <input type="text" onChange={handleChange} name="name" />
              <label htmlFor="lastName">Apellido:</label>
              <input type="text" onChange={handleChange} name="lastName" />
              <label htmlFor="email">Correo:</label>
              <input type="email" onChange={handleChange} name="email" />
              <label htmlFor="password">Contraseña:</label>
              <input type="password" onChange={handleChange} name="password" />
              <label htmlFor="repeatPassword">Repetir contraseña:</label>
              <input
                type="password"
                onChange={handleChange}
                name="repeatPassword"
              />
              <button type="submit">Continuar</button>
            </form>
          </div>
          <div className="formButton">
            <button className="google">
              <img
                src="https://res.cloudinary.com/dxben47m9/image/upload/v1638854432/culturapp/google-brands_aula04.svg"
                alt="Google"
              />
            </button>
            <button className="fb">
              <img
                src="https://res.cloudinary.com/dxben47m9/image/upload/v1638854432/culturapp/facebook-f-brands_bnodwq.svg"
                alt="Facebook"
              />
            </button>
          </div>
          <p>
            ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
          </p>
        </FormUser>
      </FormContainer>
    </PublicRoute>
  );
};

export default Register;
