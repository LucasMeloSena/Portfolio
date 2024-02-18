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
  url;

  const handleClickProject = (link_rep: string) => {
    window.open(link_rep);
  };

  return (
    <>
      <MainContent onClick={() => handleClickProject(link_rep)}>
        <ImgProject src={file_path} alt="img-project" />
      </MainContent>
    </>
  );
}

export default CardWorks;
