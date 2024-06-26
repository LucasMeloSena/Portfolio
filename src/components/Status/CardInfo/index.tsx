import { ContainerCardInfo } from "src/styles/components/Status/CardInfo/CardInfo.style";
import { Text } from "@/PortfolioUI";

interface ICardInfo {
  text: string | number;
}

function CardInfo({ text }: ICardInfo) {
  return (
    <>
      <ContainerCardInfo>
        <Text
          text={text}
          color={"#4DA768"}
          fontSize={"12px"}
          fontWeight={"400"}
          marginbottom={"0px"}
          textalign={"unset"}
        />
      </ContainerCardInfo>
    </>
  );
}

export default CardInfo;
