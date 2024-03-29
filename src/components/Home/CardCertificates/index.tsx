import {
  ContainerCardCertificates,
  ContainerDados,
  ImageCertificado,
} from "src/styles/components/Home/CardCertificates/CardCertificates.style";
import { Text } from "@/PortfolioUI";

interface ICardCertificates {
  imgCertificado: string;
  nomeCeritificado: string;
  empresa: string;
  dataEmissao: string;
  pdf_path: string;
}

function CardCertificates({
  imgCertificado,
  nomeCeritificado,
  empresa,
  dataEmissao,
  pdf_path,
}: ICardCertificates) {
  const handleClickImageCertificate = async (pdf_path: string) => {
    window.open(pdf_path);
  };

  return (
    <>
      <ContainerCardCertificates
        id="rewardId"
        onClick={() => handleClickImageCertificate(pdf_path)}
      >
        <ImageCertificado src={imgCertificado} alt="img-certificado" />
        <ContainerDados>
          <Text
            text={nomeCeritificado}
            color={"#FFF"}
            fontSize={"16px"}
            fontWeight={"500"}
            marginbottom={"0px"}
            textalign={"unset"}
          />
          <Text
            text={empresa}
            color={"#FFF"}
            fontSize={"14px"}
            fontWeight={"400"}
            marginbottom={"10px"}
            textalign={"left"}
          />
          <Text
            text={dataEmissao}
            color={"#FFF"}
            fontSize={"12px"}
            fontWeight={"300"}
            marginbottom={"0px"}
            textalign={"unset"}
          />
        </ContainerDados>
      </ContainerCardCertificates>
    </>
  );
}

export default CardCertificates;
