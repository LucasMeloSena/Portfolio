"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pages = exports.Logo = exports.MainContent = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.MainContent = styled_components_1.default.header`
    width: 100%;
    height: 10vh;
    background: #FFF;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: grid;
    grid-template-columns: 68% 8% 8% 8% 8%;
    grid-template-rows: 10vh;
    align-items: center;
`;
exports.Logo = styled_components_1.default.img`
    width: 150px;
    height: 150px;
    margin-left: 30px;
`;
exports.Pages = styled_components_1.default.h4`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    &:hover {
        cursor: pointer;
    }
`;
