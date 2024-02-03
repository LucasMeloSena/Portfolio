import { HTMLAttributes, forwardRef } from "react";
import { ContainerProjects } from "src/styles/components/Projects/Projects.style";
import { Text, Title } from "@/PortfolioUI";

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
        />
      </ContainerProjects>
    </>
  );
});

export default Projects;
