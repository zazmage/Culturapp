import styled from "styled-components";
export const NavigationMenuLogo = styled.div`
  position: fixed;
  cursor: pointer;
  text-align: center;
  left: 20px;
  top: 20px;
  border: solid #ff4500;
  background-color: #ff4500;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;

export const NavigationMenu = styled.div`
  background-color: #00000040;
  color: white;
  position: fixed;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  padding: 0 10px;
  font-size: 2vw;
  a {
    text-decoration: none;
    &:visited {
      color: white;
    }
  }
  .back-btn {
    border: solid black;
    background-color: black;
    img {
      width: 100%;
      object-fit: scale-down;
    }
  }
  div {
    width: 10vw;
    height: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
  }
  .nav-btn {
    border: solid blue;
    background-color: blue;
  }
  .category-btn {
    border: solid black;
    background-color: black;
  }
  .main-page-btn {
    border: solid #ffffff60;
    background-color: #ffffff60;
    img {
      width: 100%;
      object-fit: scale-down;
    }
  }
`;
