import {
  ContainerFooter,
  RedirectPage,
} from "src/styles/components/Common/Footer/Footer.style";
import { Text } from "@/PortfolioUI";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      <ContainerFooter>
        <Text
          text={`Copywrite ${data} - Todos os direitos reservados`}
          color={"#FFF"}
          fontSize={"18px"}
          fontWeight={"500"}
          marginBottom={"0px"}
          textAlign={"unset"}
        />
        <RedirectPage href="/status">
          Clique aqui para ver o STATUS do site!
        </RedirectPage>
      </ContainerFooter>
    </>
  );
}

export default Footer;
