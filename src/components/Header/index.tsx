import {
  MainContent,
  Logo,
  Pages,
  BtnDownloadResume,
} from "src/styles/components/Header/Header.style";
import { ImgLogo } from "src/assets/img/index";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useReward } from "react-rewards";
import { Icon } from "@/PortfolioUI";
require("dotenv").config();

interface IHeader {
  handleClickScroll: (teste: string) => void;
}

function Header({ handleClickScroll }: IHeader) {
  const pages: string[] = [
    "ABOUT ME",
    "RESUME",
    "PROJECTS",
    "AWARDS AND CERTIFICATES",
    "CONTACT",
  ];
  const { reward, isAnimating } = useReward("rewardId", "confetti");

  const handleDownloadCvClick = async () => {
    const endpoint = process.env.ENDPOINT || "";
    const header = new Headers();
    header.append("Content-Type", "application/json; charset=utf-8");
    const fileCode = 1;

    await fetch(`${endpoint}/api/v1/files`, {
      method: "POST",
      headers: header,
      body: JSON.stringify({ codigo: fileCode }),
    })
      .then(async (response) => {
        const result = await response.json();
        const file_path: string = result.data[0].file_path;
        const file_name: string = result.data[0].file_name;
        const file_request = await fetch(file_path);
        const fileData = await file_request.blob();
        const url = window.URL.createObjectURL(fileData);

        const link = document.createElement("a");
        link.href = url;
        link.download = file_name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        reward();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <MainContent>
        <Logo src={ImgLogo.src} alt="img-logo" />
        {pages.map((item, index) => (
          <Pages key={index} onClick={() => handleClickScroll(item)}>
            {item}
          </Pages>
        ))}
        <div id="rewardId">
          <BtnDownloadResume
            disabled={isAnimating}
            onClick={handleDownloadCvClick}
          >
            Download CV
            <Icon icon={faArrowDown} fontSize={"14px"} />
          </BtnDownloadResume>
        </div>
      </MainContent>
    </>
  );
}

export default Header;
