import "bootstrap/dist/css/bootstrap.min.css";
import {
  MainContent,
  Logo,
  Pages,
  BtnDownloadResume,
  BtnHeaderResponsive,
  ContainerResponsive,
  BtnMenu,
  ContainerMenuResponsive,
} from "src/styles/components/Common/Header/Header.style";
import { ImgLogo } from "src/assets/img/index";
import { Icon } from "@/PortfolioUI";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useReward } from "react-rewards";
import Link from "next/link";
require("dotenv").config();

interface IHeader {
  // eslint-disable-next-line no-unused-vars
  handleClickScroll: (target: string) => void;
}

function Header({ handleClickScroll }: IHeader) {
  const pages: string[] = [
    "SOBRE MIM",
    "EXPERIÊNCIA",
    "PROJETOS",
    "PRÊMIOS E CERTIFICADOS",
    "CONTATO",
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
      <MainContent className="navbar navbar-expand-lg bg-body-tertiary">
        <ContainerResponsive className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Logo src={ImgLogo.src} alt="logo" />
          </Link>
          <BtnHeaderResponsive
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <BtnMenu></BtnMenu>
          </BtnHeaderResponsive>
          <ContainerMenuResponsive
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              {pages.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Pages
                    className="nav-link active"
                    aria-current="page"
                    onClick={() => handleClickScroll(item)}
                  >
                    {item}
                  </Pages>
                </li>
              ))}
            </ul>
            <div id="rewardId">
              <BtnDownloadResume
                disabled={isAnimating}
                onClick={handleDownloadCvClick}
              >
                Download CV
                <Icon icon={faArrowDown} fontSize={"14px"} />
              </BtnDownloadResume>
            </div>
          </ContainerMenuResponsive>
        </ContainerResponsive>
      </MainContent>
    </>
  );
}

export default Header;
