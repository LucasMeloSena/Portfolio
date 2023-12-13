import {
  MainContent,
  WarmContainer,
  TitleWarm,
  SubtitleWarm,
  ImgBrokenLight,
  TextContainer,
  DescriptionWarm,
  BtnGoHome,
  ArrowIcon
} from "../../assets/styles/pages/Page404/Page404.style";
import BrokenLightImage from "../../assets/img/404/broken-light.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate()

  const handleOpenHomePage = () => {
    navigate('/home')
  }

  return (
    <>
      <MainContent>
        <WarmContainer>
          <ImgBrokenLight src={BrokenLightImage} alt="broken-light" />
          <TextContainer>
            <TitleWarm>404</TitleWarm>
            <SubtitleWarm>LOOKS LIKE YOU ARE LOST!</SubtitleWarm>
            <DescriptionWarm>
              The page you are looking for are not available!
            </DescriptionWarm>
            <BtnGoHome onClick={handleOpenHomePage}>GO TO HOME <ArrowIcon icon={faArrowRight}/></BtnGoHome>
          </TextContainer>
        </WarmContainer>
      </MainContent>
    </>
  );
}

export default Page404;
