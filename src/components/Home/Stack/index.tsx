import {
  ConteudoPrincipal,
  ImageStack,
} from "src/styles/components/Home/Stack/Stack.style";
import { Text } from "@/PortfolioUI";
import { StaticImageData } from "next/image";

interface IStack {
  image: StaticImageData;
  nome: string;
  marginTop: string;
}

function Stack({ image, nome, marginTop }: IStack) {
  return (
    <>
      <ConteudoPrincipal marginTop={marginTop}>
        <ImageStack src={image.src} alt="image-stack" />
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
