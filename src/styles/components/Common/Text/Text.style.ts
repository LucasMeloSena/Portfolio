import styled from "styled-components";

interface IText {
  fontSize: string;
  fontWeight: string;
  color: string;
  marginBottom: string;
  textAlign: string;
}

export const DefaultText = styled.h4<IText>`
  color: ${(props) => props.color || "#FFF"};
  font-family: Poppins;
  font-size: ${(props) => props.fontSize || "16px"};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || "500"};
  line-height: 1.2em;
  margin-bottom: ${(props) => props.marginBottom || "0px"} !important;
  text-align: ${(props) => props.textAlign || "unset"};
`;
