import styled from "styled-components";
import { IconFontAwesome } from "src/styles/components/Common/Icon/Icon.style";

interface TextProps {
  color: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
}

export const PresentationContainer = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 100px 0px 100px;
`;

export const PresentationTextContainer = styled.div`
  margin-top: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
`;

export const DefaultText = styled.h4<TextProps>`
  color: ${(props) => props.color || "#FFF"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "500"};
  font-family: Poppins;
  line-height: ${(props) => props.lineHeight || "normal"};
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

export const ContainerImages = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BigL = styled.img`
  position: absolute;
  top: 80px;
  right: 320px;
  z-index: 0;
  width: 500px;
  height: 500px;
`;

export const LucasSena = styled.img`
  position: relative;
  z-index: 2;
  top: 40px;
  left: 240px;
  width: 400px;
  height: 400px;
`;

export const Bow = styled.img`
  position: relative;
  z-index: 1;
  bottom: 50px;
  top: 15px;
  right: 40px;
  width: 450px;
  height: 500px;
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
