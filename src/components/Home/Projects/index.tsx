import { HTMLAttributes, forwardRef, useEffect, useState } from "react";
import {
  ContainerProjects,
  ContainerCardWorks,
} from "src/styles/components/Home/Projects/Projects.style";
import { Text, Title, CardWorks } from "@/PortfolioUI";
require("dotenv").config();

interface IProjects extends HTMLAttributes<HTMLDivElement> {}

interface ICardWorks {
  url: string;
  link_rep: string;
  file_path: string;
}

const Projects = forwardRef<HTMLDivElement, IProjects>((props, ref) => {
  const [projects, setProjects] = useState<ICardWorks[]>([]);

  useEffect(() => {
    async function getProjects() {
      const endpoint = process.env.ENDPOINT || "";
      await fetch(`${endpoint}/api/v1/projects`, {
        method: "GET",
      })
        .then(async (response) => {
          const result = await response.json();
          setProjects(result.data.projects);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    getProjects();
  }, []);
  return (
    <>
      <ContainerProjects {...props} ref={ref}>
        <Title text={"Projetos"} />
        <Text
          text={"Aqui você encontra todos os trabalhos desenvolvidos por mim!"}
          fontSize={"14px"}
          fontWeight={"300"}
          color={"#FFF"}
          marginbottom={"0px"}
          textalign={"unset"}
        />
        <ContainerCardWorks>
          {projects.map((item, index) => (
            <CardWorks
              key={index}
              url={item.url}
              link_rep={item.link_rep}
              file_path={item.file_path}
            />
          ))}
        </ContainerCardWorks>
      </ContainerProjects>
    </>
  );
});

Projects.displayName = "Projects";

export default Projects;
