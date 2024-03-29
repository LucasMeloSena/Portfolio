import {
  ConteudoPrincipal,
  ImageStack,
} from "src/styles/components/Home/Stack/Stack.style";
import { Text } from "@/PortfolioUI";
import { StaticImageData } from "next/image";

interface IStack {
  image: StaticImageData;
  nome: string;
  margintop: string;
}

function Stack({ image, nome, margintop }: IStack) {
  return (
    <>
      <ConteudoPrincipal margintop={margintop}>
        <ImageStack src={image.src} alt="image-stack" />
        <Text
          text={nome}
          color={"#FFF"}
          fontSize={"16px"}
          fontWeight={"400"}
          marginbottom={"0px"}
          textalign={"unset"}
        />
      </ConteudoPrincipal>
    </>
  );
}

export default Stack;
