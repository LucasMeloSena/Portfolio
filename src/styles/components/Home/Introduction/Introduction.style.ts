import styled from "styled-components";
import { IconFontAwesome } from "src/styles/components/Common/Icon/Icon.style";

interface TextProps {
  color: string;
  fontSize: string;
  fontWeight: string;
  lineheight: string;
}

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  padding: 0px 70px 0px 70px;
  @media (max-width: 768px) {
    padding: 0;
    margin-top: 150px;
    gap: 80px;
  }
`;

export const PresentationContainer = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 100px 0px 100px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0;
    gap: 40px;
  }
`;

export const PresentationTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const DefaultText = styled.h4<TextProps>`
  color: ${(props) => props.color || "#FFF"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "500"};
  font-family: Poppins;
  line-height: ${(props) => props.lineheight || "normal"};
`;

export const ContainerSocialMedia = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ContainerIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  &:hover {
    transition: all 0.5s;
    background-color: #1b2029;
    color: #fff;
    cursor: pointer;
    & ${IconFontAwesome} {
      color: #fff;
    }
  }
`;

export const LucasSena = styled.img`
  width: 400px;
  height: 400px;
  margin-top: -80px;
  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`;

export const KnowledgeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;
