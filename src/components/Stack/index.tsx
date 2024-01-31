import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ConteudoPrincipal } from "src/styles/components/Stack/Stack.style";
import { Icon, Text } from "@/PortfolioUI";

interface IStack {
  icon: IconDefinition;
  nome: string;
}

function Stack({ icon, nome }: IStack) {
  return (
    <>
      <ConteudoPrincipal>
        <Icon icon={icon} />
        <Text
          text={nome}
          color={"#FFF"}
          fontSize={"16px"}
          fontWeight={"400"}
          marginBottom={"0px"}
        />
      </ConteudoPrincipal>
    </>
  );
}

export default Stack;
