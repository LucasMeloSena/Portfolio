import { MainContent } from "src/styles/pages/Home/Home.style";
import {
  Header,
  Footer,
  Introduction,
  AboutMe,
  Resume,
  Projects,
} from "@/PortfolioUI";
import { useRef } from "react";

function Home() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToComponent = (target: string) => {
    switch (target) {
      case "ABOUT":
        if (aboutMeRef.current) {
          window.scrollTo({
            top: aboutMeRef.current.offsetTop,
            behavior: "smooth",
          });
        }
        break;
      case "RESUME":
        if (resumeRef.current) {
          window.scrollTo({
            top: resumeRef.current.offsetTop,
            behavior: "smooth",
          });
        }
        break;
      case "PROJECTS":
        if (projectsRef.current) {
          window.scrollTo({
            top: projectsRef.current.offsetTop,
            behavior: "smooth",
          });
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Header handleClickScroll={scrollToComponent} />

      <MainContent>
        <Introduction />
        <AboutMe ref={aboutMeRef} />
        <Resume ref={resumeRef} />
        <Projects ref={projectsRef} />
      </MainContent>

      <Footer />
    </>
  );
}

export default Home;
