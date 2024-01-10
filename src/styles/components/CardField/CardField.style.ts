import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const IconKnowledge = styled(FontAwesomeIcon)`
  color: #6d9dd0;
`;

export const MainText = styled.h4`
  color: #fff;
  font-family: Poppins;
  font-weight: 500;
`;

export const IconArrow = styled(FontAwesomeIcon)`
  color: #fff;
`;


export const MainContent = styled.div`
  width: 308px;
  height: 70px;
  border-radius: 5px;
  border: 1px solid #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    background-color: #fff;
    & ${MainText} {
    color: #1b2029;
    }
    & ${IconArrow} {
    color: #1b2029;
    }
  }
`;