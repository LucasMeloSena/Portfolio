import styled from "styled-components";

export const ContainerAboutMe = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 150px;
  padding: 0px 100px 0px 100px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DefaultContainer = styled.div``;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ContainerPresentationAndSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

export const PresentationText = styled.h4`
  margin-top: 20px !important;
  width: 100%;
  color: #fff;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 300 !important;
`;

export const ContainerSkills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ContainerSkill = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const ContainerFrameStacks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;
