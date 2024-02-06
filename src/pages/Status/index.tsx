import { ContainerStatus } from "src/styles/pages/Status/Status.style";
import { Header, Footer, Title, Details, Chart } from "@/PortfolioUI";

function Status() {
  const scrollToComponent = (target: string) => {
    switch (target) {
      case "ABOUT ME":
        window.location.href = "/";
        break;
      case "RESUME":
        window.location.href = "/";
        break;
      case "PROJECTS":
        window.location.href = "/";
        break;
      case "CONTACT":
        window.location.href = "/";
        break;
      case "AWARDS AND CERTIFICATES":
        window.location.href = "/";
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Header handleClickScroll={scrollToComponent} />

      <ContainerStatus>
        <Title text={"Estatísticas e Status do Site"} />
        <Chart />
        <Details />
      </ContainerStatus>

      <Footer />
    </>
  );
}

export default Status;
