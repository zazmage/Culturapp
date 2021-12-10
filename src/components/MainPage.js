import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/slices/database/index";
import { Spinner } from "../styles/spinnerStyleComp";
import { MainContent } from "../styles/StyleMainpage";
import Event from "./Event";

const MainPage = () => {
  // Use selector se trae el estado de un reductor dado
  const { data } = useSelector((state) => state.database);
  const dispatch = useDispatch();

  useEffect(() => {
    // Get data se trae la información de la base de datos y se despacha al reducer
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
      
        {data === null ? (
         
          <Spinner />
    
        ) : (
          data.map((el) => <Event key={el.id} props={el} />)
        )}
      
    </>
  );
};

export default MainPage;
