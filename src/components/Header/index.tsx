import {
  MainContent,
  Logo,
  Pages,
  BtnDownloadResume,
  DownloadIcon,
} from "src/styles/components/Header/Header.style";
import ImgLogo from "src/assets/img/logo.png";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useReward } from "react-rewards";
import Swal from "sweetalert2";

function Header() {
  const pages: string[] = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];
  const { reward, isAnimating } = useReward("rewardId", "confetti");

  const handleDownloadCvClick = () => {
    reward();
    Swal.fire({
      title: "Sucesso!",
      text: "Download realizado com êxito!",
      icon: "success",
    });
  };

  return (
    <>
      <MainContent>
        <Logo src={ImgLogo.src} alt="img-logo" />
        {pages.map((element, index) => (
          <Pages key={index}>{element}</Pages>
        ))}
        <div id="rewardId">
          <BtnDownloadResume
            disabled={isAnimating}
            onClick={handleDownloadCvClick}
          >
            Download CV
            <DownloadIcon icon={faArrowDown} />
          </BtnDownloadResume>
        </div>
      </MainContent>
    </>
  );
}

export default Header;
