import styled from "styled-components";

export const ContainerCardCertificates = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 290px;
  width: 280px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: translateY(-20px);
  }
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding-bottom: 10px;
  }
`;

export const ContainerDados = styled.div`
  padding: 0px 10px 0px 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ImageCertificado = styled.img`
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
`;
