import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
`;

export const PresentationTextContainer = styled.div`
  margin-top: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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

export const SocialMediaIcon = styled(FontAwesomeIcon)`
  color: #1b2029;
  font-size: 16px;
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

    & ${SocialMediaIcon} {
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
  top: 120px;
  right: 320px;
  z-index: 0;
  width: 500px;
  height: 500px;
`;

export const LucasSena = styled.img`
  position: relative;
  z-index: 2;
  top: 80px;
  left: 240px;
  width: 400px;
  height: 400px;
`;

export const Bow = styled.img`
  position: relative;
  z-index: 1;
  bottom: 50px;
  top: 50px;
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