import styled from "styled-components";

export const MainText = styled.h4`
  color: #fff;
  font-family: Poppins;
  font-weight: 500;
  font-size: 16px !important;
`;

export const MainContent = styled.div`
  margin-left: 20px;
  margin-right: 20px;
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
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
