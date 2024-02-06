import styled from "styled-components";

export const MainContent = styled.div`
  background-color: #fff;
  height: 240px;
  width: 300px;
  border-radius: 10px;
  transition: all 0.5s;
  box-shadow: #fff 0px 0px 7px;
  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    transform: translateY(-10px);
  }
`;
