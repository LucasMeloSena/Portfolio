import { HTMLAttributes, forwardRef } from "react";
import {
  ContainerProjects,
  ContainerCardWorks,
} from "src/styles/components/Home/Projects/Projects.style";
import { Text, Title, CardWorks } from "@/PortfolioUI";

interface IProjects extends HTMLAttributes<HTMLDivElement> {}

const Projects = forwardRef<HTMLDivElement, IProjects>((props, ref) => {
  return (
    <>
      <ContainerProjects {...props} ref={ref}>
        <Title text={"My Latest Works"} />
        <Text
          text={"Here you find all works developed by me!"}
          fontSize={"14px"}
          fontWeight={"300"}
          color={"#FFF"}
          marginBottom={"0px"}
          textAlign={"unset"}
        />
        <ContainerCardWorks>
          <CardWorks />
        </ContainerCardWorks>
      </ContainerProjects>
    </>
  );
});

export default Projects;
