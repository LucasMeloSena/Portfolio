import {
  PresentationContainer,
  PresentationTextContainer,
  DefaultText,
  ContainerSocialMedia,
  ContainerIcon,
  ContainerImages,
  BigL,
  Bow,
  LucasSena,
  KnowledgeContainer,
} from "src/styles/components/Introduction/Introduction.style";
import ImgLucasena from "src/assets/img/Home/lucasena.png";
import ImgBigL from "src/assets/img/Home/bigL.png";
import ImgBow from "src/assets/img/Home/bow.png";
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

function Introduction() {
  interface KnowLedge {
    nome: string;
    iconKnowLedge: IconDefinition;
  }

  interface SocialMediaIcons {
    iconSocialMedia: IconDefinition,
    name: string
  }

  const socialMediaIcons: SocialMediaIcons[] = [{
    iconSocialMedia: faLinkedinIn,
    name: 'LinkedIn'
  }, {
    iconSocialMedia: faGithub,
    name: 'GitHub'
  }];

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
        window.open("https://www.linkedin.com/in/lucas-sena-282311234");
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
      <PresentationContainer>
        <PresentationTextContainer>
          <DefaultText
            color={"#FFF"}
            fontWeight={"700"}
            fontSize={"25px"}
            lineHeight={"1.2em"}
          >
            Hey There,
          </DefaultText>
          <DefaultText
            color={"#FFF"}
            fontWeight={"700"}
            fontSize={"50px"}
            lineHeight={"1em"}
          >
            I'm Lucas Sena
          </DefaultText>
          <DefaultText
            color={"rgba(255, 255, 255, 0.80)"}
            fontWeight={"500"}
            fontSize={"18px"}
            lineHeight={"1.2em"}
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
        <ContainerImages>
          <BigL src={ImgBigL.src} alt="big-l" />
          <LucasSena src={ImgLucasena.src} alt="lucasena" />
          <Bow src={ImgBow.src} alt="bow" />
        </ContainerImages>
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
    </>
  );
}

export default Introduction;
