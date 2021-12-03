import { getData } from "./store/slices/database";
import { useDispatch, useSelector } from "react-redux";

export const App = () => {
  const { data } = useSelector((state) => state.database);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Pagina principal</h1>
      <p>
        La página no tiene maquetación, sin embargo ya cuenta con un estado
        redux que almacena la base de datos traída desde firestore y un contexto
        que almacena la lógica del login y register desde firestore
      </p>
    </div>
  );
};

export default App;
