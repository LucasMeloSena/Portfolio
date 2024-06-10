import {
  ContainerCertificates,
  ContainerCards,
} from "src/styles/components/Home/Certificates/Certificates.style";
import { Title, CardCertificates } from "@/PortfolioUI";
import { useEffect, useState } from "react";
import { convertDateToLocaleString } from "src/assets/utils/convert-date";
require("dotenv").config();

interface ICertificates {
  codigo: number;
  title: string;
  company: string;
  dt_geracao: string;
  pdf_path: string;
  img_path: string;
}

function Certificates() {
  const [certificates, setCertificates] = useState<ICertificates[]>([]);

  useEffect(() => {
    async function getCertificates() {
      const endpoint = process.env.ENDPOINT || "";
      await fetch(`${endpoint}/api/v1/certificates`, {
        method: "GET",
      })
        .then(async (response) => {
          const result = await response.json();
          for (let item of result.data.certificates) {
            let data: Date = new Date(item.dt_geracao);
            item.dt_geracao = convertDateToLocaleString(data);
          }
          setCertificates(result.data.certificates);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    getCertificates();
  }, []);

  return (
    <>
      <ContainerCertificates>
        <Title text={"Certificados"} />
        <ContainerCards>
          {certificates.map((item, index) => (
            <CardCertificates
              key={index}
              imgCertificado={item.img_path}
              empresa={item.company}
              dataEmissao={item.dt_geracao}
              nomeCeritificado={item.title}
              pdf_path={item.pdf_path}
            />
          ))}
        </ContainerCards>
      </ContainerCertificates>
    </>
  );
}

export default Certificates;
