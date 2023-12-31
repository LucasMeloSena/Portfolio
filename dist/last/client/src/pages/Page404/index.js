"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const Page404_style_1 = require("../../assets/styles/pages/Page404/Page404.style");
const broken_light_png_1 = __importDefault(
  require("../../assets/img/404/broken-light.png"),
);
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_router_dom_1 = require("react-router-dom");
function Page404() {
  const navigate = (0, react_router_dom_1.useNavigate)();
  const handleOpenHomePage = () => {
    navigate("/home");
  };
  return (
    <>
      <Page404_style_1.MainContent>
        <Page404_style_1.WarmContainer>
          <Page404_style_1.ImgBrokenLight
            src={broken_light_png_1.default}
            alt="broken-light"
          />
          <Page404_style_1.TextContainer>
            <Page404_style_1.TitleWarm>404</Page404_style_1.TitleWarm>
            <Page404_style_1.SubtitleWarm>
              LOOKS LIKE YOU ARE LOST!
            </Page404_style_1.SubtitleWarm>
            <Page404_style_1.DescriptionWarm>
              The page you are looking for are not available!
            </Page404_style_1.DescriptionWarm>
            <Page404_style_1.BtnGoHome onClick={handleOpenHomePage}>
              GO TO HOME{" "}
              <Page404_style_1.ArrowIcon
                icon={free_solid_svg_icons_1.faArrowRight}
              />
            </Page404_style_1.BtnGoHome>
          </Page404_style_1.TextContainer>
        </Page404_style_1.WarmContainer>
      </Page404_style_1.MainContent>
    </>
  );
}
exports.default = Page404;
