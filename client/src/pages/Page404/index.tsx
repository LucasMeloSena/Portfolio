import {
  MainContent,
  WarmContainer,
  TitleWarm,
  ImgBrokenLight,
} from "../../assets/styles/pages/Page404/Page404.style";
import BrokenLightImage from "../../assets/img/404/broken-light.png";

function Page404() {
  return (
    <>
      <MainContent>
        <WarmContainer>
            <ImgBrokenLight src={BrokenLightImage} alt="broken-light" />
            <TitleWarm>404</TitleWarm>
        </WarmContainer>
      </MainContent>
    </>
  );
}

export default Page404;
