import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #1b2029;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}
`;
