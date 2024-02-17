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
          marginBottom={"20px"}
          textAlign={"unset"}
        />
        <Text
          fontSize={"20px"}
          fontWeight={"600"}
          color={"#fff"}
          text={jobTitle}
          marginBottom={"5px"}
          textAlign={"unset"}
        />
        <Text
          fontSize={"14px"}
          fontWeight={"300"}
          color={"#fff"}
          text={company}
          marginBottom={"20px"}
          textAlign={"unset"}
        />
        <Text
          fontSize={"14px"}
          fontWeight={"300"}
          color={"#fff"}
          text={adress}
          marginBottom={"0px"}
          textAlign={"unset"}
        />
      </ContainerCardResume>
    </>
  );
}

export default CardResume;
