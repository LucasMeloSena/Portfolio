import { ContainerStatus } from "src/styles/pages/Status/Status.style";
import { Header, Footer, Title, Details, LineChart } from "@/PortfolioUI";
import { scrollToComponent } from "src/assets/utils/scroll-header";

function Status() {
  return (
    <>
      <Header handleClickScroll={scrollToComponent} />

      <ContainerStatus>
        <Title text={"Site Statistics and Status"} />
        <LineChart />
        <Details />
      </ContainerStatus>

      <Footer />
    </>
  );
}

export default Status;
