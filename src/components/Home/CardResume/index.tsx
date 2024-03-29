import { ContainerCardResume } from "src/styles/components/Home/CardResume/CardResume.style";
import { Text } from "@/PortfolioUI";

interface ICardResumeData {
  period: string;
  jobTitle: string;
  company: string;
  adress: string;
}

function CardResume({ period, jobTitle, company, adress }: ICardResumeData) {
  return (
    <>
      <ContainerCardResume>
        <Text
          fontSize={"14px"}
          fontWeight={"300"}
          color={"#fff"}
          text={period}
          marginbottom={"20px"}
          textalign={"unset"}
        />
        <Text
          fontSize={"20px"}
          fontWeight={"600"}
          color={"#fff"}
          text={jobTitle}
          marginbottom={"5px"}
          textalign={"unset"}
        />
        <Text
          fontSize={"14px"}
          fontWeight={"300"}
          color={"#fff"}
          text={company}
          marginbottom={"20px"}
          textalign={"unset"}
        />
        <Text
          fontSize={"14px"}
          fontWeight={"300"}
          color={"#fff"}
          text={adress}
          marginbottom={"0px"}
          textalign={"unset"}
        />
      </ContainerCardResume>
    </>
  );
}

export default CardResume;
