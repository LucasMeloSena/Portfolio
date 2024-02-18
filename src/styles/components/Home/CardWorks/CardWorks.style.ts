import styled from "styled-components";

export const MainContent = styled.div`
  background-color: #fff;
  height: 240px;
  width: 320px;
  border-radius: 10px;
  transition: all 0.5s;
  box-shadow: #fff 0px 0px 7px;
  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    transform: translateY(-10px);
  }
`;

export const ImgProject = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
