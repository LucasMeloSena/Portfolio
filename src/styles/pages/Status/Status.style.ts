import styled from "styled-components";

export const ContainerStatus = styled.div`
  width: 100%;
  height: auto;
  min-height: 68vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 70px;
  margin-top: 150px;
  @media (max-width: 768px) {
    margin-top: 150px;
    gap: 20px;
  }
`;
