import { Title, CardAwards } from "@/PortfolioUI";
import { HTMLAttributes, forwardRef, useEffect, useState } from "react";
import { convertDateToLocaleString } from "src/assets/utils/convert-date";
import {
  ContainerAwards,
  ContainerCardAwards,
} from "src/styles/components/Home/Awards/Awards.style";
require("dotenv").config();

interface IAwards extends HTMLAttributes<HTMLDivElement> {}

interface ICardAwards {
  title: string;
  descricao: string;
  company_name: string;
  dt_geracao: string;
  pdf_path: string;
  img_path: string;
}

const Awards = forwardRef<HTMLDivElement, IAwards>((props, ref) => {
  const [awards, setAwards] = useState<ICardAwards[]>([]);

  useEffect(() => {
    async function getAwards() {
      const endpoint = process.env.ENDPOINT || "";
      await fetch(`${endpoint}/api/v1/awards`, {
        method: "GET",
      })
        .then(async (response) => {
          const result = await response.json();
          for (let item of result.data.awards) {
            let data: Date = new Date(item.dt_geracao);
            item.dt_geracao = convertDateToLocaleString(data);
          }
          setAwards(result.data.awards);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    getAwards();
  }, []);

  return (
    <>
      <ContainerAwards {...props} ref={ref}>
        <Title text={"Prêmios"} />
        <ContainerCardAwards>
          {awards.map((item, index) => (
            <CardAwards
              key={index}
              dt_geracao={item.dt_geracao}
              titulo={item.title}
              descricao={item.descricao}
              img_path={item.img_path}
              pdf_path={item.pdf_path}
              company_name={item.company_name}
            />
          ))}
        </ContainerCardAwards>
      </ContainerAwards>
    </>
  );
});

Awards.displayName = "Awards";

export default Awards;
