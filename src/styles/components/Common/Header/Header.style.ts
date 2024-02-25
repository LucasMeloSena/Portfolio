import styled from "styled-components";
import { IconFontAwesome } from "src/styles/components/Common/Icon/Icon.style";

export const MainContent = styled.div`
  width: 100%;
  height: 100px;
  background-color: #1b2029 !important;
  display: grid;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const ContainerResponsive = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0;
    justify-content: space-around !important;
  }
`;

export const Logo = styled.img`
  max-width: 150px;
`;

export const BtnHeaderResponsive = styled.button`
  background-color: transparent !important;
  border: none !important;
  &.navbar-toggler:focus {
    outline: none;
  }
`;

export const BtnMenu = styled.span`
  &::after,
  &::before {
    background-color: #fff;
    content: "";
    display: block;
    height: 2px;
    width: 24px;
    margin-bottom: 5px;
  }
`;

export const ContainerMenuResponsive = styled.div`
  @media (max-width: 768px) {
    background-color: #23272d;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const Pages = styled.a`
  font-family: Poppins, sans-serif;
  color: #fff !important;
  font-weight: 500;
  margin-left: 40px !important;
  &:hover {
    cursor: pointer;
  }
`;

export const BtnDownloadResume = styled.button`
  margin-left: 60px;
  margin-right: 20px;
  border-radius: 8px;
  border: 1px solid #fff;
  background: none;
  color: #fff;
  font-weight: 500;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  width: 200px;
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: all 0.5s;
  &:hover {
    background-color: #fff;
    color: #1b2029;
    cursor: pointer;
    & ${IconFontAwesome} {
      color: #1b2029;
    }
  }
  @media (max-width: 768px) {
    margin-left: 40px;
  }
`;
