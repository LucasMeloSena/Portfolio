import styled from "styled-components";

interface IStyleStack {
  marginTop: string;
}

export const ConteudoPrincipal = styled.div<IStyleStack>`
  margin-top: ${(props) => props.marginTop || "0px"};
  width: 150px;
  height: 150px;
  border-radius: 10px;
  border: solid 1px #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ImageStack = styled.img`
  width: 64px;
  height: 64px;
`;
