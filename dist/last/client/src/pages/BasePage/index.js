"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_style_1 = require("../../assets/styles/pages/BasePage/BasePage.style");
const react_router_dom_1 = require("react-router-dom");
const Header_1 = __importDefault(require("../../components/Header"));
const Footer_1 = __importDefault(require("../../components/Footer"));
function BasePage() {
  return (
    <>
      <BasePage_style_1.MainContainer>
        <Header_1.default />
        <react_router_dom_1.Outlet />
        <Footer_1.default />
      </BasePage_style_1.MainContainer>
    </>
  );
}
exports.default = BasePage;
