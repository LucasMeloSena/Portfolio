import styled from "styled-components";

export const ContainerCertificates = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  padding: 0px 100px 0px 100px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 20px 0px 20px;
  }
`;

export const ContainerCards = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
`;
