import { MainContent } from "src/styles/pages/Home/Home.style";
import { Header, Footer, Introduction, AboutMe, Resume } from "@/PortfolioUI";

function Home() {
  return (
    <>
      <Header />

      <MainContent>
        <Introduction />
        <AboutMe />
        <Resume />
      </MainContent>

      <Footer />
    </>
  );
}

export default Home;
