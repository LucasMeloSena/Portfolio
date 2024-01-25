import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const MainContent = styled.div`
  width: 100%;
  height: 100px;
  background-color: #1b2029;
  display: grid;
  grid-template-columns: 42% 10% 10% 10% 10% 18%;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 0px 0px 40px;
`;

export const Logo = styled.img`
  max-width: 150px;
`;

export const Pages = styled.h4`
  font-family: Poppins, sans-serif;
  color: #fff;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;

export const BtnDownloadResume = styled.button`
  margin-right: 20px;
  border-radius: 8px;
  border: 1px solid #fff;
  background: none;
  color: #fff;
  font-weight: 500;
  font-family: Poppins, sans-serif;
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
  }
`;

export const DownloadIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
`;
