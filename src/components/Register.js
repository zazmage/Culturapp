import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { auth, handleAuth } = useContext(AuthContext);
  const { form, handleChange } = useForm();
  const navigate = useNavigate();
  return (
    <div>
      <h2>Soy Register</h2>
    </div>
  );
};

export default Register;
