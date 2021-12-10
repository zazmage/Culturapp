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
  color: ${colors.secText};
  display: flex;
  flex-flow: column wrap;
  float: left;
  justify-content: space-evenly;
  align-items: center;
  button {
    background-color: ${colors.priBackground};
    color: ${colors.secText};
    border: none;
    border-radius: 50%;
    width: 12rem;
    height: 12rem;
    margin: 1rem;
    font-size: 130px;
    cursor: pointer;
    img {
      width: 6rem;
      margin-top: 1.3rem;
      margin-right: .8rem;
    }
  }
  a {
    text-decoration: none;
    flex-grow: 1;
    color: black;
    &:visited {
      color: black;
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
  width: 80%;
  height: 850px;
  background-color: black;
  border-radius: 20px;
  align-items: center;
  margin: 5rem 15%;
  font-size: 40px;
  h4 {
    color: white;
    float: left;
    margin: .4rem;
  }
  img{
    width: 80%;
    height: 60%;
    object-fit: scale-down;
  }
`;

export const FormUser = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 80%;
  height: 800px;
  background-image: linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, .8));
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
`
