import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const RedirectPage = styled.a`
  color: #6d9dd0;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;
