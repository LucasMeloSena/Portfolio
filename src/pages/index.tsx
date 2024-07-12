import { Site, MainContent } from "src/styles/pages/Home/Home.style";
import {
  Header,
  Footer,
  Introduction,
  AboutMe,
  Resume,
  Projects,
  Contact,
  Awards,
  Certificates,
} from "@/PortfolioUI";
import { useEffect, useRef } from "react";
require("dotenv").config();

function Home() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const endpoint = process.env.ENDPOINT || "";
    const addAccess = async () => {
      await fetch(`${endpoint}/api/v1/access`);
    };
    addAccess();
  }, []);

  const scrollToComponent = (target: string) => {
    switch (target) {
      case "SOBRE MIM":
        if (aboutMeRef.current) {
          window.scrollTo({
            top: aboutMeRef.current.offsetTop,
            behavior: "smooth",
          });
        }
        break;
      case "EXPERIÊNCIA":
        if (resumeRef.current) {
          window.scrollTo({
            top: resumeRef.current.offsetTop,
            behavior: "smooth",
          });
        }
        break;
      case "PROJETOS":
        if (projectsRef.current) {
          window.scrollTo({
            top: projectsRef.current.offsetTop,
            behavior: "smooth",
          });
        }
        break;
      case "CONTATO":
        if (contactRef.current) {
          window.scrollTo({
            top: contactRef.current.offsetTop,
            behavior: "smooth",
          });
        }
        break;
      case "PRÊMIOS E CERTIFICADOS":
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
      <Site>
        <Header handleClickScroll={scrollToComponent} />

        <MainContent>
          <Introduction />
          <AboutMe ref={aboutMeRef} />
          <Resume ref={resumeRef} />
          <Projects ref={projectsRef} />
          <Awards ref={awardsRef} />
          <Certificates />
          <Contact ref={contactRef} />
        </MainContent>

        <Footer />
      </Site>
    </>
  );
}

export default Home;
