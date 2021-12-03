import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "@firebase/auth";
import { createContext, useState } from "react";
import { authGoogle } from "../firebase/firebaseConfig";

const AuthContext = createContext();

const initialAuth = null;

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);

  const loginEmailPassword = (email, password, navigate) => {
    const authStatus = getAuth();
    console.log(auth);
    signInWithEmailAndPassword(authStatus, email, password)
      .then(({ user }) => {
        setAuth(user.email);
        console.log("Bienvenido " + (user.displayName || user.email));
        window.alert("Inicio de sesión exitoso");
        navigate("/", {
          replace: true,
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("El usuario no existe");
      });
  };

  const registerEmailPassword = (
    { name, email, password, secPassword },
    navigate
  ) => {
    console.log(password, secPassword);
    if (password === secPassword) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(async ({ user }) => {
          await updateProfile(auth.currentUser, { displayName: name });
          console.log(user);
          window.alert("Registro exitoso");
          navigate("/", {
            replace: true,
          });
        })
        .catch((error) => {
          console.log(error);
          console.log("hay un error");
        });
    } else {
      console.log("Contraseñas distintas");
    }
  };

  const loginGoogle = (navigate) => {
    const auth = getAuth();
    signInWithPopup(auth, authGoogle)
      .then(({ user }) => {
        setAuth(user.email);
        console.log("Inicio de sesión exitoso");
        navigate("/", {
          replace: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleAuth = (e, form, navigate) => {
    // console.log(navigate);
    e.preventDefault();
    switch (e.target.id) {
      case "login-form":
        loginEmailPassword(form.email, form.password, navigate);
        break;
      case "register-form":
        registerEmailPassword(form, navigate);
        break;
      case "login-google":
        loginGoogle(navigate);
        break;
      default:
        break;
    }
  };

  const data = { auth, handleAuth };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
