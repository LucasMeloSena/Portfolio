"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowIcon =
  exports.BtnGoHome =
  exports.DescriptionWarm =
  exports.TextContainer =
  exports.ImgBrokenLight =
  exports.SubtitleWarm =
  exports.TitleWarm =
  exports.WarmContainer =
  exports.MainContent =
    void 0;
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const styled_components_1 = __importDefault(require("styled-components"));
exports.MainContent = styled_components_1.default.div`
    background: radial-gradient(circle, #FFFFFF, #D5E7F7);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
exports.WarmContainer = styled_components_1.default.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 150px;
`;
exports.TitleWarm = styled_components_1.default.h1`
    color: #6D9DD0;
    font-size: 150px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    text-shadow: 
    1px 0px 1px #ccc, 0px 1px 1px #eee, 
    2px 1px 1px #ccc, 1px 2px 1px #eee,
    3px 2px 1px #ccc, 2px 3px 1px #eee,
    4px 3px 1px #ccc, 3px 4px 1px #eee,
    5px 4px 1px #ccc, 4px 5px 1px #eee,
    6px 5px 1px #ccc, 5px 6px 1px #eee,
    7px 6px 1px #ccc;
`;
exports.SubtitleWarm = styled_components_1.default.h4`
    color: #1b2029;
    font-size: 24px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 600;
`;
exports.ImgBrokenLight = styled_components_1.default.img`
    width: 350px;
    height: 350px;
`;
exports.TextContainer = styled_components_1.default.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
exports.DescriptionWarm = styled_components_1.default.h6`
    color: #666666;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
`;
exports.BtnGoHome = styled_components_1.default.button`
    margin-top: 50px;
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    background-color: #e6e6e6;
    &:hover {
        cursor: pointer;
    }
`;
exports.ArrowIcon = (0, styled_components_1.default)(
  react_fontawesome_1.FontAwesomeIcon,
)`
    margin-left: 5px;
`;
