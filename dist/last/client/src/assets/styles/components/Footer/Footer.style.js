"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainContent = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.MainContent = styled_components_1.default.footer`
    width: 100%;
    height: 10vh;
    background-color: #FFF;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;
