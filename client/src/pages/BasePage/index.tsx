import { MainContainer } from "../../assets/styles/pages/BasePage/BasePage.style";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function BasePage() {
  return (
    <>
      <MainContainer>
        <Header />
        <Outlet />
        <Footer />
      </MainContainer>
    </>
  );
}

export default BasePage;
