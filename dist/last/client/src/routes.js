"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const BasePage_1 = __importDefault(require("./pages/BasePage"));
const Page404_1 = __importDefault(require("./pages/Page404"));
const Home_1 = __importDefault(require("./pages/Home"));
function AppRoutes() {
  return (
    <>
      <react_router_dom_1.BrowserRouter>
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/" element={<BasePage_1.default />}>
            <react_router_dom_1.Route
              path="/home"
              element={<Home_1.default />}
            ></react_router_dom_1.Route>
            <react_router_dom_1.Route
              path="*"
              element={<Page404_1.default />}
            ></react_router_dom_1.Route>
          </react_router_dom_1.Route>
        </react_router_dom_1.Routes>
      </react_router_dom_1.BrowserRouter>
    </>
  );
}
exports.default = AppRoutes;
