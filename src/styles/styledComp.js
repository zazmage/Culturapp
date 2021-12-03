import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import colors from "./colors";

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  *{
   box-sizing: border-box; 
   scroll-behavior: smooth;
   margin: 0;
   padding: 0;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  div {
    border: solid 1px #00000020;
    border-radius: 4px;
    padding: 20px 26px;
  }
  img {
    cursor: pointer;
  }
`;
