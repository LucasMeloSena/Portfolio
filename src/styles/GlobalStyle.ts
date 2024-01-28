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

body::-webkit-scrollbar {
  width: 10px;
}

body::-webkit-scrollbar-thumb {
  background-color: #6d9dd0;
  border-radius: 4px;
}

body::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0 !important;
  padding: 0 !important;
}
`;
