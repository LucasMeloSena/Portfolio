import styled from "styled-components";

export const ContainerDetails = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 180px;
  margin-top: 20px;
  @media (max-width: 768px) {
    height: auto;
    gap: 60px;
    flex-direction: column;
  }
`;

export const ContainerServers = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
