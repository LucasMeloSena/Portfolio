import {
  ContainerErrorPage,
  ImageError,
  ContainerTexto,
  BtnComeBack,
} from "src/styles/pages/ErrorPage/ErrorPage.style";
import { ImgError } from "src/assets/img/index";
import { Header, Footer, Title, Text } from "@/PortfolioUI";
import { useRouter } from "next/router";

function ErrorPage() {
  const router = useRouter();

  const handleClickButton = () => {
    router.push("/");
  };

  const scrollToComponent = () => {
    window.location.href = "/";
  };

  return (
    <>
      <Header handleClickScroll={scrollToComponent} />

      <ContainerErrorPage>
        <ImageError src={ImgError.src} alt="image-error" />
        <ContainerTexto>
          <Title text={"OPS..."} />
          <Text
            text={"Ocorreu um erro inesperado!"}
            fontSize={"16px"}
            fontWeight={"400"}
            color={"#FFF"}
            marginbottom={"0px"}
            textalign={"unset"}
          />
          <BtnComeBack onClick={handleClickButton}>
            Voltar para a página inicial
          </BtnComeBack>
        </ContainerTexto>
      </ContainerErrorPage>

      <Footer />
    </>
  );
}

export default ErrorPage;
