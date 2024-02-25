import styled from "styled-components";

export const ContainerResume = styled.div`
  width: 100%;
  height: auto;
  background: rgba(93, 97, 103, 0.36);
  margin-top: 80px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const ContainerEducation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 20px 0px 20px;
  }
`;

export const ContainerExperience = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 20px 0px 20px;
  }
`;

export const ContainerAreas = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 200px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 60px;
  }
`;
export const ContainerArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
