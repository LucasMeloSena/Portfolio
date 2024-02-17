import { MainContent } from "src/styles/components/Home/Skills/Skills.style";
import { Text } from "@/PortfolioUI";

interface ISkills {
  text: string;
}

function Skills({ text }: ISkills) {
  return (
    <>
      <MainContent>
        <Text
          text={text}
          color={"#FFF"}
          fontSize={"14px"}
          fontWeight={"300"}
          marginBottom={"0px"}
          textAlign={"unset"}
        />
      </MainContent>
    </>
  );
}

export default Skills;
