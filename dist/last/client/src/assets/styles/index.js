"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const GlobalStyle = (0, styled_components_1.createGlobalStyle)`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;
exports.default = GlobalStyle;
