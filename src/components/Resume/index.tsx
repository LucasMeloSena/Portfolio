import {
  ContainerResume,
  ContainerEducation,
  ContainerExperience,
  ContainerAreas,
  ContainerArea,
} from "src/styles/components/Resume/Resume.style";
import { Title, Icon, Text, CardResume } from "@/PortfolioUI";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
require('dotenv').config()

interface ICardResume {
  codigo: number;
  periodo: string;
  titulo: string;
  empresa: string;
  endereco: string;
}

function Resume() {
  const [education, setEducation] = useState<ICardResume[]>([]);
  const [experience, setExperience] = useState<ICardResume[]>([]);

  useEffect(() => {
    async function getEducation() {
      const endpoint = process.env.ENDPOINT || ''
      await fetch(`${endpoint}/api/v1/education`, {
        method: "GET",
      })
        .then(async (response) => {
          const result = await response.json();
          setEducation(result.data);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }

    async function getExperience() {
      const endpoint = process.env.ENDPOINT || ''
      await fetch(`${endpoint}/api/v1/experience`, {
        method: "GET",
      })
        .then(async (response) => {
          const result = await response.json();
          const value = result.data.sort(function (
            a: ICardResume,
            b: ICardResume,
          ) {
            return b.codigo - a.codigo;
          });
          setExperience(value);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
    getEducation();
    getExperience();
  }, []);

  return (
    <>
      <ContainerResume>
        <Title text={"Resume"} />
        <ContainerAreas>
          <ContainerEducation>
            <ContainerArea>
              <Icon
                color={"#6D9DD0"}
                fontSize={"20px"}
                icon={faGraduationCap}
              />
              <Text
                fontSize={"18px"}
                fontWeight={"700"}
                color={"#fff"}
                text={"Education"}
                marginBottom={"0px"}
              />
            </ContainerArea>
            {education.map((item, index) => (
              <CardResume
                key={index}
                period={item.periodo}
                jobTitle={item.titulo}
                company={item.empresa}
                adress={item.endereco}
              />
            ))}
          </ContainerEducation>
          <ContainerExperience>
            <ContainerArea>
              <Icon color={"#6D9DD0"} fontSize={"20px"} icon={faBriefcase} />
              <Text
                fontSize={"18px"}
                fontWeight={"700"}
                color={"#fff"}
                text={"Experience"}
                marginBottom={"0px"}
              />
            </ContainerArea>
            {experience.map((item, index) => (
              <CardResume
                key={index}
                period={item.periodo}
                jobTitle={item.titulo}
                company={item.empresa}
                adress={item.endereco}
              />
            ))}
          </ContainerExperience>
        </ContainerAreas>
      </ContainerResume>
    </>
  );
}

export default Resume;
