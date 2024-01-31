import {
  ContainerAboutMe,
  DefaultContainer,
  MainContent,
  PresentationText,
  ContainerPresentationAndSkills,
  ContainerSkills,
  ContainerFrameStacks,
} from "src/styles/components/AboutMe/AboutMe.style";
import { Title, Text, Skills } from "@/PortfolioUI";
import { useEffect, useState } from "react";

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
      await fetch("http://localhost:3000/api/v1/skills", {
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
    { background: 1, stack: frontend },
    { background: 2, stack: backend },
    { background: 1, stack: mobile },
    { background: 2, stack: databases },
    { background: 1, stack: devops },
    { background: 2, stack: cloud },
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
                  marginBottom={"20px"}
                />
                {containerSkill.map((item, index) => (
                  <Skills
                    key={index}
                    backGround={item.background}
                    text={item.stack}
                  />
                ))}
              </ContainerSkills>
            </ContainerPresentationAndSkills>
          </MainContent>
        </DefaultContainer>

        <ContainerFrameStacks>
          {/* <Stack 
          icon={}
          nome={}
          /> */}
        </ContainerFrameStacks>
      </ContainerAboutMe>
    </>
  );
}

export default AboutMe;
