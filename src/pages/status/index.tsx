import { ContainerStatus } from "src/styles/pages/Status/Status.style";
import { Header, Footer, Title, Details, LineChart } from "@/PortfolioUI";

function Status() {
  const scrollToComponent = () => {
    window.location.href = "/";
  };

  return (
    <>
      <Header handleClickScroll={scrollToComponent} />

      <ContainerStatus>
        <Title text={"Estatísticas e Status do Site"} />
        <LineChart />
        <Details />
      </ContainerStatus>

      <Footer />
    </>
  );
}

export default Status;
