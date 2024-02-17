import { Text } from "@/PortfolioUI";
import {
  ContainerCardAwards,
  ContainerCompany,
  ContainerTexto,
  ConstainerDescricao,
  ImgLogoCompany,
  BtnView,
} from "src/styles/components/Home/CardAwards/CardAwards.style";

interface ICardAwards {
  dt_geracao: string;
  titulo: string;
  descricao: string;
  img_path: string;
  pdf_path: string;
  company_name: string;
}

function CardAwards({
  dt_geracao,
  titulo,
  descricao,
  img_path,
  pdf_path,
  company_name,
}: ICardAwards) {
  const handleClickButtonView = (pdf_path: string) => {
    window.open(pdf_path);
  };

  return (
    <>
      <ContainerCardAwards>
        <ContainerTexto>
          <Text
            text={dt_geracao}
            color={"#FFF"}
            fontSize={"12px"}
            fontWeight={"400"}
            marginBottom={"0px"}
            textAlign={"unset"}
          />
        </ContainerTexto>
        <ConstainerDescricao>
          <Text
            text={titulo}
            color={"#FFF"}
            fontSize={"16px"}
            fontWeight={"500"}
            marginBottom={"0px"}
            textAlign={"unset"}
          />
          <Text
            text={descricao}
            color={"#FFF"}
            fontSize={"12px"}
            fontWeight={"400"}
            marginBottom={"0px"}
            textAlign={"unset"}
          />
        </ConstainerDescricao>
        <ContainerCompany>
          <ImgLogoCompany src={img_path} alt="img-award" />
          <Text
            text={company_name}
            color={"#FFF"}
            fontSize={"13px"}
            fontWeight={"500"}
            marginBottom={"0px"}
            textAlign={"unset"}
          />
          <BtnView onClick={() => handleClickButtonView(pdf_path)}>
            View
          </BtnView>
        </ContainerCompany>
      </ContainerCardAwards>
    </>
  );
}

export default CardAwards;
