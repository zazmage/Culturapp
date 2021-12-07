import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import colors from "./colors";
import './font.css';

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

export const NavigationBar = styled.div`
  background-color: ${colors.priBackground};
  color: ${colors.secText};
  display: flex;
  flex-flow: row, nowrap;
  justify-content: space-around;
  align-items: center;
  a {
    text-decoration: none;
    flex-grow: 1;
    &:visited {
      color: ${colors.secText};
    }
  }
  h1 {
    text-align: center;
    cursor: pointer;
  }
  p {
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
  }
  div {
    display: flex;
    flex-flow: row, nowrap;
    justify-content: space-evenly;
    flex-grow: 2;
    input {
      width: 90%;
      height: 40px;
      border: none;
      border-radius: 8px 0 0 8px;
    }
    div {
      background-color: ${colors.primary};
      width: 48px;
      border-radius: 0 8px 8px 0;
      img {
        width: 24px;
      }
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 800px;
  background-color: #9879FA;
  align-items: center;
  margin: 5rem 15%;
  box-shadow: 0 4px rgba(0, 0, 0, .2);
  font-size: 40px;
  .persona,
  .organizacion {
    background-color: #C4C4C4;
    border-radius: 29px;
    border: none;
    padding: .3rem .5rem;
    margin: 2rem;

    &:hover,
    &:checked {
      box-shadow: 3px 3px rgba(0, 0, 0, .3);
      }
    }
  label {
    display: flex;
    color: white;
  }
  input {
    border: none;
    margin: .5rem;
    width: 100%;
  }
  .google {
    background-color: #FB64A5;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 1rem;
    border: none;
    img {
      width: 85%;
      margin: .3rem;
    }
  }
  .fb {
    background-color: #FB64A5;
    width: 80px;
    height: 80px;
    margin: 1rem;
    border: none;
    img {
      width: 55%;
      margin: .3rem;
    }
  }
`;
