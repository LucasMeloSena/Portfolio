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
import { useEffect } from "react";

function Resume() {
  // const [education, setEducation] = useState<object[]>([])
  // const [experience, setExperience] = useState<object[]>([])

  useEffect(() => {
    const result = fetch("http://localhost:3000/api/v1/education", {
      method: "GET",
    });
    console.log(result);
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
            <CardResume
              period={"February 2021 - December 2023"}
              jobTitle={"I.T Technician"}
              company={"COTEMIG"}
              adress={"Belo Horizonte - Minas Gerais - Brazil"}
            />
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
            <CardResume
              period={"September 2023 - the moment"}
              jobTitle={"Systems Development Intern"}
              company={"Dottatec Soluções Inteligentes"}
              adress={"Belo Horizonte - Minas Gerais - Brazil"}
            />
          </ContainerExperience>
        </ContainerAreas>
      </ContainerResume>
    </>
  );
}

export default Resume;
