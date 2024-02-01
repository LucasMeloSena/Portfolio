import {
  ContainerAboutMe,
  DefaultContainer,
  MainContent,
  PresentationText,
  ContainerPresentationAndSkills,
  ContainerSkills,
  ContainerSkill,
  ContainerFrameStacks,
} from "src/styles/components/AboutMe/AboutMe.style";
import { Title, Text, Skills, Stack } from "@/PortfolioUI";
import { useEffect, useState } from "react";
import {
  ImgBackend,
  ImgFrontend,
  ImgMobile,
  ImgDatabase,
  ImgDevops,
  ImgCloud,
} from "src/assets/img/index";

interface IStack {
  nome: string;
}

interface ISkills {
  frontend: IStack[];
  backend: IStack[];
  mobile: IStack[];
  databases: IStack[];
  devops: IStack[];
  cloud: IStack[];
}

function AboutMe() {
  const [skills, setSkills] = useState<ISkills>({
    frontend: [],
    backend: [],
    mobile: [],
    databases: [],
    devops: [],
    cloud: [],
  });

  useEffect(() => {
    async function getSkills() {
      await fetch(`${process.env.ENDPOINT}api/v1/skills`, {
        method: "GET",
      })
        .then(async (response) => {
          const result = await response.json();
          setSkills(result.data);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
    getSkills();
  }, []);

  const frontend = skills.frontend.map((item) => item.nome).join(", ");
  const backend = skills.backend.map((item) => item.nome).join(", ");
  const mobile = skills.mobile.map((item) => item.nome).join(", ");
  const databases = skills.databases.map((item) => item.nome).join(", ");
  const devops = skills.devops.map((item) => item.nome).join(", ");
  const cloud = skills.cloud.map((item) => item.nome).join(", ");
  const containerSkill = [
    { stack: frontend },
    { stack: backend },
    { stack: mobile },
    { stack: databases },
    { stack: devops },
    { stack: cloud },
  ];

  const stacks = [
    {
      nome: "Front End",
      image: ImgFrontend,
      marginTop: "0px",
    },
    {
      nome: "Back End",
      image: ImgBackend,
      marginTop: "30px",
    },
    {
      nome: "Mobile",
      image: ImgMobile,
      marginTop: "0px",
    },
    {
      nome: "Data Base",
      image: ImgDatabase,
      marginTop: "30px",
    },
    {
      nome: "DevOps",
      image: ImgDevops,
      marginTop: "0px",
    },
    {
      nome: "Cloud",
      image: ImgCloud,
      marginTop: "30px",
    },
  ];

  return (
    <>
      <ContainerAboutMe>
        <DefaultContainer>
          <Title text="About Me" />
          <Text
            text={
              "I have a passion for technology and how it can positively impact people's lives"
            }
            color={"#FFF"}
            fontSize={"16px"}
            fontWeight={"400"}
            marginBottom={"0px"}
          />
          <MainContent>
            <ContainerPresentationAndSkills>
              <PresentationText>
                Hello! It's a pleasure know you! I'm 17 years old and graduated
                em I.T Technician by Cotemig. I have a Entrepreneurial,
                innovative profile, ease with changes, creative, curious,
                critical thinking and teamwork.
              </PresentationText>
              <ContainerSkills>
                <Text
                  text={"Skills"}
                  color={"#FFF"}
                  fontSize={"20px"}
                  fontWeight={"600"}
                  marginBottom={"10px"}
                />
                <ContainerSkill>
                  {containerSkill.map((item, index) => (
                    <Skills key={index} text={item.stack} />
                  ))}
                </ContainerSkill>
              </ContainerSkills>
            </ContainerPresentationAndSkills>
          </MainContent>
        </DefaultContainer>

        <ContainerFrameStacks>
          {stacks.map((item, index) => (
            <Stack
              key={index}
              image={item.image}
              nome={item.nome}
              marginTop={item.marginTop}
            />
          ))}
        </ContainerFrameStacks>
      </ContainerAboutMe>
    </>
  );
}

export default AboutMe;
