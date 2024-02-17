import styled from "styled-components";

export const ContainerCardCertificates = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 300px;
  width: 320px;
  border-radius: 10px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: translateY(-20px);
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const ContainerDados = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ImageCertificado = styled.img`
  width: 270px;
  border-radius: 5px;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
`;
