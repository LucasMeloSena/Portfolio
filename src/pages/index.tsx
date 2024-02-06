import { MainContent } from "src/styles/pages/Home/Home.style";
import {
  Header,
  Footer,
  Introduction,
  AboutMe,
  Resume,
  Projects,
  Contact,
} from "@/PortfolioUI";
import { useRef } from "react";

function Home() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);

  const scrollToComponent = (target: string) => {
    switch (target) {
      case "ABOUT ME":
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
      case "CONTACT":
        if (contactRef.current) {
          window.scrollTo({
            top: contactRef.current.offsetTop,
            behavior: "smooth",
          });
        }
        break;
      case "AWARDS AND CERTIFICATES":
        if (awardsRef.current) {
          window.scrollTo({
            top: awardsRef.current.offsetTop,
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
        <Contact ref={contactRef} />
        {/* <Awards ref={awardsRef} /> */}
      </MainContent>

      <Footer />
    </>
  );
}

export default Home;
