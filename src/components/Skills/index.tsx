import {
  MainContent
} from 'src/styles/components/Skills/Skills.style'
import { Text } from "@/PortfolioUI";
//import { useState } from 'react';

interface ISkills {
  text: string
}

function Skills({text}: ISkills) {

  //const [background, setBackground] = useState('rgba(93, 97, 103, 0.36)');

  return (
    <>
      <MainContent background={'rgba(93, 97, 103, 0.36)'}>
        <Text text={text} color={"#FFF"} fontSize={"14px"} fontWeight={"400"} marginBottom={"0px"}/>
      </MainContent>
    </>
  )
}

export default Skills