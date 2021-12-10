import styled from "styled-components";

export const UserInfCont = styled.div`
  background-color: #00000080;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  color: white;
  padding: 20px;
  gap: 20px;
  border-radius: 0px 70px 70px 70px;
  div {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    gap: 10px;
  }
`;

export const UserEventCont = styled.div`
  width: 25vw;
  img {
    width: 100%;
  }
`;
