"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const Header_style_1 = require("../../assets/styles/components/Header/Header.style");
const logo_png_1 = __importDefault(require("../../assets/img/logo.png"));
function Header() {
  return (
    <>
      <Header_style_1.MainContent>
        <Header_style_1.Logo src={logo_png_1.default} alt="image-logo" />
        <Header_style_1.Pages>HOME</Header_style_1.Pages>
        <Header_style_1.Pages>ABOUT</Header_style_1.Pages>
        <Header_style_1.Pages>PROJECTS</Header_style_1.Pages>
        <Header_style_1.Pages>CONTACT</Header_style_1.Pages>
      </Header_style_1.MainContent>
    </>
  );
}
exports.default = Header;
