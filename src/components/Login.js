import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import googleIcon from "../assets/btn_google_light_normal_ios.svg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { auth, handleAuth } = useContext(AuthContext);
  const { form, handleChange } = useForm();
  const navigate = useNavigate();
  return (
    <div>
      <h2>Soy un Login</h2>
      <Link to="/register">Registrarse</Link>
    </div>
  );
};

export default Login;
