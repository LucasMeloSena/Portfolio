import {
  MainContent,
  ImgProject,
} from "src/styles/components/Home/CardWorks/CardWorks.style";

interface ICardWorks {
  url: string;
  link_rep: string;
  file_path: string;
}

function CardWorks({ url, link_rep, file_path }: ICardWorks) {
  //@ts-ignore
  link_rep;

  const handleClickProject = (url: string) => {
    window.open(url);
  };

  return (
    <>
      <MainContent onClick={() => handleClickProject(url)}>
        <ImgProject src={file_path} alt="img-project" />
      </MainContent>
    </>
  );
}

export default CardWorks;
