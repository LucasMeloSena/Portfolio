import {
  ContainerAboutMe,
  DefaultContainer,
  MainContent,
  PresentationText,
  ContainerPresentationAndSkills,
  ContainerSkills,
  ContainerSkill,
  ContainerFrameStacks,
} from "src/styles/components/Home/AboutMe/AboutMe.style";
import { Title, Text, Skills, Stack } from "@/PortfolioUI";
import { useEffect, useState, forwardRef, HTMLAttributes } from "react";
import {
  ImgBackend,
  ImgFrontend,
  ImgMobile,
  ImgDatabase,
  ImgDevops,
  ImgCloud,
} from "src/assets/img/index";
require("dotenv").config();

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

interface IAboutMe extends HTMLAttributes<HTMLDivElement> {}

const AboutMe = forwardRef<HTMLDivElement, IAboutMe>((props, ref) => {
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
      const endpoint = process.env.ENDPOINT || "";
      await fetch(`${endpoint}/api/v1/skills`, {
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
      margintop: "0px",
    },
    {
      nome: "Back End",
      image: ImgBackend,
      margintop: "30px",
    },
    {
      nome: "Mobile",
      image: ImgMobile,
      margintop: "0px",
    },
    {
      nome: "Data Base",
      image: ImgDatabase,
      margintop: "30px",
    },
    {
      nome: "DevOps",
      image: ImgDevops,
      margintop: "0px",
    },
    {
      nome: "Cloud",
      image: ImgCloud,
      margintop: "30px",
    },
  ];

  return (
    <>
      <ContainerAboutMe {...props} ref={ref}>
        <DefaultContainer>
          <Title text="Sobre Mim" />
          <Text
            text={
              "Sou apaixonado por tecnologia e por como ela pode impactar positivamente a vida das pessoas!"
            }
            color={"#FFF"}
            fontSize={"16px"}
            fontWeight={"400"}
            marginbottom={"0px"}
            textalign={"unset"}
          />
          <MainContent>
            <ContainerPresentationAndSkills>
              <PresentationText>
                Olá! É um prazer conhecê-lo! Tenho 18 anos e me formei em
                Técnico em T.I. pelo Cotemig. Tenho um perfil empreendedor,
                inovador, de liderança, que possui facilidade com mudanças,
                criativo, curioso, pensamento crítico e trabalho em equipe.
              </PresentationText>
              <ContainerSkills>
                <Text
                  text={"Skills"}
                  color={"#FFF"}
                  fontSize={"20px"}
                  fontWeight={"600"}
                  marginbottom={"10px"}
                  textalign={"unset"}
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
              margintop={item.margintop}
            />
          ))}
        </ContainerFrameStacks>
      </ContainerAboutMe>
    </>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
