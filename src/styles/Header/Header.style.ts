import styled from "styled-components";

export const MainContent = styled.div`
  width: 100%;
  height: 100px;
  background-color: #1b2029 !important;
  display: grid !important;
  grid-template-columns: 45% 10% 10% 10% 10% 15% !important;
  justify-content: flex-start !important;
  align-items: center !important;
`;

export const Logo = styled.img`
  margin-left: 20px;
  max-width: 150px;
`;

export const Pages = styled.h4`
  font-family: Poppins, sans-serif;
  color: #fff;
  font-weight: 500;
`;

export const BtnDownloadResume = styled.button`
  margin-right: 20px;
  border-radius: 8px;
  border: 1px solid #fff;
  background: none;
  color: #fff;
  font-family: Poppins, sans-serif;
  width: 200px;
  padding: 10px 10px;
`;
