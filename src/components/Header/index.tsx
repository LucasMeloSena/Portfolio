import {
  MainContent,
  Logo,
  Pages,
  BtnDownloadResume,
  DownloadIcon,
} from "src/styles/components/Header/Header.style";
import ImgLogo from "src/assets/img/logo.png";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const pages: string[] = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

  return (
    <>
      <MainContent>
        <Logo src={ImgLogo.src} alt="img-logo" />
        {pages.map((element, index) => (
          <Pages key={index}>{element}</Pages>
        ))}
        <BtnDownloadResume>
          Download CV
          <DownloadIcon icon={faArrowDown} />
        </BtnDownloadResume>
      </MainContent>
    </>
  );
}

export default Header;
