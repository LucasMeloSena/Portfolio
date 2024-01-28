import {
  MainContent,
  MainText,
} from "src/styles/components/CardField/CardField.style";
import { Icon } from "@/PortfolioUI";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ICardField {
  iconKnowledge: IconDefinition;
  mainText: string;
}

function CardField({ iconKnowledge, mainText }: ICardField) {
  return (
    <>
      <MainContent>
        <Icon icon={iconKnowledge} color={"#6d9dd0"} />
        <MainText>{mainText}</MainText>
      </MainContent>
    </>
  );
}

export default CardField;
