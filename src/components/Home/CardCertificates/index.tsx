import {
  ContainerCardCertificates,
  ContainerDados,
  ImageCertificado,
  ContainerInfo,
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
  const handleClickImageCertificate = async (
    pdf_path: string,
  ) => {
    window.open(pdf_path);
  };

  return (
    <>
      <ContainerCardCertificates
        id="rewardId"
        onClick={() => handleClickImageCertificate(pdf_path)}
      >
        <ContainerInfo>
          <ImageCertificado src={imgCertificado} alt="img-certificado" />
          <Text
            text={nomeCeritificado}
            color={"#FFF"}
            fontSize={"16px"}
            fontWeight={"500"}
            marginBottom={"0px"}
            textAlign={"unset"}
          />
        </ContainerInfo>
        <ContainerDados>
          <Text
            text={empresa}
            color={"#FFF"}
            fontSize={"12px"}
            fontWeight={"300"}
            marginBottom={"0px"}
            textAlign={"left"}
          />
          <Text
            text={dataEmissao}
            color={"#FFF"}
            fontSize={"12px"}
            fontWeight={"300"}
            marginBottom={"0px"}
            textAlign={"right"}
          />
        </ContainerDados>
      </ContainerCardCertificates>
    </>
  );
}

export default CardCertificates;
