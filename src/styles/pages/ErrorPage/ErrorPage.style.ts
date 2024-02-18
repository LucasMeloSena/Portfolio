import styled from "styled-components";

export const ContainerErrorPage = styled.div`
  width: 100%;
  height: 70vh;
  padding: 0px 180px 0px 180px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ImageError = styled.img`
  width: 400px;
  height: 400px;
`;

export const ContainerTexto = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BtnComeBack = styled.button`
  margin-top: 10px;
  border: solid 1px #fff;
  background: transparent;
  border-radius: 5px;
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  color: #fff;
  width: 220px;
  padding: 5px 0px 5px 0px;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    background: #fff;
    color: #1b2029;
  }
`;
