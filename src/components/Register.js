import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import { FormContainer } from '../styles/StyledComp';

const Register = () => {
  const { auth, handleAuth } = useContext(AuthContext);
  const { form, handleChange } = useForm();
  const navigate = useNavigate();
  return (
    <FormContainer>
      <div className='formHead'>
        <button className='persona'>Persona</button>
        <button className='organizacion'>Organización</button>
      </div>
      <div className='formData'>
        <label htmlFor='name'>Nombre:</label>
        <input type='text' />
        <label htmlFor='lastname'>Apellido:</label>
        <input type='text' />
        <label htmlFor='email'>Correo:</label>
        <input type='email' />
        <label htmlFor='password'>Contraseña:</label>
        <input type='password' />
      </div>
    </FormContainer>
  );
};

export default Register;
