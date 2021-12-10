import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import colors from "./colors";
import "./font.css";

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  *{
   box-sizing: border-box;
   scroll-behavior: smooth;
   margin: 0;
   padding: 0;
   font-family: 'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  };
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 800px;
  background-color: #9879fa;
  align-items: center;
  margin: 5rem 15%;
  box-shadow: 0 4px rgba(0, 0, 0, 0.2);
  font-size: 40px;
  .persona,
  .organizacion {
    background-color: #c4c4c4;
    border-radius: 29px;
    border: none;
    padding: 0.3rem 0.5rem;
    margin: 2rem;

    &:hover,
    &:checked {
      box-shadow: 3px 3px rgba(0, 0, 0, 0.3);
    }
  }
  label {
    display: flex;
    color: white;
  }
  input {
    border: none;
    margin: 0.5rem;
    width: 100%;
  }
  .google {
    background-color: #fb64a5;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 1rem;
    border: none;
    img {
      width: 85%;
      margin: 0.3rem;
    }
  }
  .fb {
    background-color: #fb64a5;
    width: 80px;
    height: 80px;
    margin: 1rem;
    border: none;
    img {
      width: 55%;
      margin: 0.3rem;
    }
  }
`;
