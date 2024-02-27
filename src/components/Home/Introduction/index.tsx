import {
  PresentationContainer,
  PresentationTextContainer,
  DefaultText,
  ContainerSocialMedia,
  ContainerIcon,
  LucasSena,
  KnowledgeContainer,
  MainContainer,
} from "src/styles/components/Home/Introduction/Introduction.style";
import {
  faCode,
  faDisplay,
  faMobileButton,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { CardField, Icon } from "@/PortfolioUI";
import { ImgLucasSena } from "src/assets/img/index";

interface KnowLedge {
  nome: string;
  iconKnowLedge: IconDefinition;
}

interface SocialMediaIcons {
  iconSocialMedia: IconDefinition;
  name: string;
}

function Introduction() {
  const socialMediaIcons: SocialMediaIcons[] = [
    {
      iconSocialMedia: faLinkedinIn,
      name: "LinkedIn",
    },
    {
      iconSocialMedia: faGithub,
      name: "GitHub",
    },
  ];

  const knowledge: KnowLedge[] = [
    {
      nome: "Front End Developer",
      iconKnowLedge: faDisplay,
    },
    {
      nome: "Back End Developer",
      iconKnowLedge: faCode,
    },
    {
      nome: "Mobile Developer",
      iconKnowLedge: faMobileButton,
    },
  ];

  const handleClickSocialIcon = (name: string) => {
    const redirect: { [name: string]: () => void } = {
      LinkedIn() {
        window.open("https://www.linkedin.com/in/lucasmelosena/");
      },
      GitHub() {
        window.open("https://github.com/LucasMeloSena");
      },
    };

    const result = redirect[name];
    if (result) {
      result();
    }
  };

  return (
    <>
      <MainContainer>
        <PresentationContainer>
          <PresentationTextContainer>
            <DefaultText
              color={"#FFF"}
              fontWeight={"600"}
              fontSize={"22px"}
              lineHeight={"20px"}
            >
              Hey There,
            </DefaultText>
            <DefaultText
              color={"#FFF"}
              fontWeight={"700"}
              fontSize={"40px"}
              lineHeight={"30px"}
            >
              I'm Lucas Sena
            </DefaultText>
            <DefaultText
              color={"rgba(255, 255, 255, 0.80)"}
              fontWeight={"500"}
              fontSize={"18px"}
              lineHeight={"20px"}
            >
              Full Stack Developer
            </DefaultText>
            <ContainerSocialMedia>
              {socialMediaIcons.map((item, index) => (
                <ContainerIcon
                  key={index}
                  onClick={() => handleClickSocialIcon(item.name)}
                >
                  <Icon icon={item.iconSocialMedia} color={"#1b2029"} />
                </ContainerIcon>
              ))}
            </ContainerSocialMedia>
          </PresentationTextContainer>
          <LucasSena src={ImgLucasSena.src} alt="lucasena" />
        </PresentationContainer>

        <KnowledgeContainer>
          {knowledge.map((item, index) => (
            <CardField
              key={index}
              mainText={item.nome}
              iconKnowledge={item.iconKnowLedge}
            />
          ))}
        </KnowledgeContainer>
      </MainContainer>
    </>
  );
}

export default Introduction;
