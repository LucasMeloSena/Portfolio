import { MainContent } from "src/styles/components/Skills/Skills.style";
import { Text } from "@/PortfolioUI";
import { useEffect, useState } from "react";

interface ISkills {
  text: string;
  backGround: number;
}

function Skills({ text, backGround }: ISkills) {
  const [background, setBackground] = useState<string>('');
  
  useEffect(() => {
    if (backGround == 1) {
      setBackground('rgba(93, 97, 103, 0.36)')
    }
    if (backGround == 2) {
      setBackground('#1b2029')
    }
  }, [])

  return (
    <>
      <MainContent background={background}>
        <Text
          text={text}
          color={"#FFF"}
          fontSize={"14px"}
          fontWeight={"400"}
          marginBottom={"0px"}
        />
      </MainContent>
    </>
  );
}

export default Skills;
