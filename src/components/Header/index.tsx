import {
  MainContent,
  Logo,
  Pages,
  BtnDownloadResume,
} from "src/styles/Header/Header.style";
import ImgLogo from "src/assets/img/logo.png";

function Header() {
  const pages: string[] = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

  return (
    <>
      <MainContent>
        <Logo src={ImgLogo.src} alt="img-logo" />
        {pages.map((element, index) => (
          <Pages key={index}>{element}</Pages>
        ))}
        <BtnDownloadResume>Download CV</BtnDownloadResume>
      </MainContent>
    </>
  );
}

export default Header;
