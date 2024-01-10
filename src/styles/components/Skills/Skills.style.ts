import styled from "styled-components";

interface ISkills {
  background: string
}

export const MainContent = styled.div<ISkills> `
width: 478px;
height: 80px;
border-radius: 10px;
background: ${(props) => props.background};
display: flex;
justify-content: center;
align-items: center;
`