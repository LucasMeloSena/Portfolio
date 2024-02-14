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
          text={`Copywrite ${data} - All rights reserved`}
          color={"#FFF"}
          fontSize={"18px"}
          fontWeight={"500"}
          marginBottom={"0px"}
        />
        <RedirectPage href="/status">
          Click here to see the site's STATUS!
        </RedirectPage>
      </ContainerFooter>
    </>
  );
}

export default Footer;
