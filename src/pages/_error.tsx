import {
  ContainerErrorPage,
  ImageError,
  ContainerTexto,
  BtnComeBack,
} from "src/styles/pages/ErrorPage/ErrorPage.style";
import { ImgError } from "src/assets/img/index";
import { Header, Footer, Title, Text } from "@/PortfolioUI";
import { scrollToComponent } from "src/assets/utils/scroll-header";
import { useRouter } from "next/router";

function ErrorPage() {
  const router = useRouter();

  const handleClickButton = () => {
    router.push("/");
  };

  return (
    <>
      <Header handleClickScroll={scrollToComponent} />

      <ContainerErrorPage>
        <ImageError src={ImgError.src} alt="image-error" />
        <ContainerTexto>
          <Title text={"OPS..."} />
          <Text
            text={"An unexpected error has occurred!"}
            fontSize={"16px"}
            fontWeight={"400"}
            color={"#FFF"}
            marginBottom={"0px"}
          />
          <BtnComeBack onClick={handleClickButton}>
            Return to home screen
          </BtnComeBack>
        </ContainerTexto>
      </ContainerErrorPage>

      <Footer />
    </>
  );
}

export default ErrorPage;
