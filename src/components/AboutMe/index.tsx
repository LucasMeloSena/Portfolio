import {
  ContainerAboutMe,
  MainContent,
  PresentationText,
  ContainerPresentationAndSkills,
  ContainerSkills,
} from "src/styles/components/AboutMe/AboutMe.style";
import { Title, Text, Skills } from "@/PortfolioUI";

function AboutMe() {
  return (
    <>
      <ContainerAboutMe>
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
              Hello! It's a pleasure know you! I'm 17 years old and graduated em
              I.T Technician by Cotemig. I have a Entrepreneurial, innovative
              profile, ease with changes, creative, curious, critical thinking
              and teamwork.
            </PresentationText>
            <ContainerSkills>
              <Text text={'Skills'} color={"#FFF"} fontSize={"20px"} fontWeight={"600"} marginBottom={"20px"}/>
              <Skills text={"HTML, CSS, React.js, Vue.js, Styled-Components"}/>
            </ContainerSkills>
          </ContainerPresentationAndSkills>
        </MainContent>
      </ContainerAboutMe>
    </>
  );
}

export default AboutMe;
