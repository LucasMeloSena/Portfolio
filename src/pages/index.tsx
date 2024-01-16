import { MainContent } from "src/styles/pages/Home/Home.style";
import { Header, Footer, Introduction, AboutMe } from "@/PortfolioUI";

function Home() {
  return (
    <>
      <Header />

      <MainContent>
        <Introduction />
        <AboutMe />
      </MainContent>

      <Footer />
    </>
  );
}

export default Home;
