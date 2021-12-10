import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import googleIcon from "../assets/btn_google_light_normal_ios.svg";
import { Link, useNavigate } from "react-router-dom";
import { PublicRoute } from "../routes/PublicRoute";
import { FormContainer } from '../styles/StyledComp';

const Login = () => {
  const { auth, handleAuth } = useContext(AuthContext);
  const { form, handleChange } = useForm();
  const navigate = useNavigate();
  return (
    <PublicRoute auth={auth}>
      <FormContainer>
        <div>
          <h3>Iniciar sesión</h3>
          <form id="login-form" onSubmit={(e) => handleAuth(e, form, navigate)}>
            <label>
              <p>Dirección de correo electrónico</p>
              <input onChange={handleChange} name="email" />
            </label>
            <label>
              <p>Contraseña</p>
              <input onChange={handleChange} type="password" name="password" />
            </label>
            <button className='continue'>Continuar</button>
          </form>
          <img
            id="login-google"
            onClick={(e) => {
              return handleAuth(e, form, navigate);
            }}
            src={googleIcon}
            alt="Login with google"
          />
        </div>
        <p>¿Eres nuevo en Culturapp?</p>
        <Link to="/register" style={{textDecoration: 'none'}}>
          <button>Crea tu cuenta de Culturapp</button>
        </Link>
      </FormContainer>
    </PublicRoute>
  );
};

export default Login;
