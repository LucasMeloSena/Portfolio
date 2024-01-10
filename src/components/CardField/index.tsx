import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  MainContent,
  IconKnowledge,
  MainText,
  IconArrow,
} from "src/styles/components/CardField/CardField.style";

interface ICardField {
  iconKnowledge: IconDefinition;
  mainText: string;
  iconArrow: IconDefinition;
}

function CardField({ iconKnowledge, mainText, iconArrow }: ICardField) {
  return (
    <>
      <MainContent>
        <IconKnowledge icon={iconKnowledge} />
        <MainText>{mainText}</MainText>
        <IconArrow icon={iconArrow} />
      </MainContent>
    </>
  );
}

export default CardField;
