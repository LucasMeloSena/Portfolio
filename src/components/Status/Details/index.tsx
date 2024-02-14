import {
  ContainerDetails,
  ContainerServers,
  ContainerInfo,
} from "src/styles/components/Status/Details/Details.style";
import { CardInfo, Text } from "@/PortfolioUI";
import { useEffect, useState } from "react";
require("dotenv").config();

interface IDetails {
  dependencies: {
    database: {
      status: string;
      version: string;
      max_connections: number;
      opened_connections: number;
      latency: {
        first_query: number;
        second_query: number;
        third_query: number;
      };
    };
    webserver: {
      status: string;
      provider: string;
      environment: string;
      version: string;
      timezone: string;
    };
  };
}

function Details() {
  const [status, setStatus] = useState<IDetails>({
    dependencies: {
      database: {
        status: "",
        version: "",
        max_connections: 0,
        opened_connections: 0,
        latency: {
          first_query: 0,
          second_query: 0,
          third_query: 0,
        },
      },
      webserver: {
        status: "",
        provider: "",
        environment: "",
        version: "",
        timezone: "",
      },
    },
  });

  useEffect(() => {
    const getStatus = async () => {
      const endpoint = process.env.ENDPOINT || "";
      await fetch(`${endpoint}/api/v1/status`, {
        method: "GET",
      })
        .then(async (response) => {
          const result = await response.json();
          setStatus(result);
        })
        .catch(async (error) => {
          console.error(error);
        });
    };
    getStatus();
  }, []);

  const conexoesDisponiveis =
    status.dependencies.database.max_connections -
    status.dependencies.database.opened_connections;

  const dataBaseInfo = [
    {
      info: "Status:",
      detail: status.dependencies.database.status,
    },
    {
      info: "Available Connections:",
      detail: conexoesDisponiveis,
    },
    {
      info: "Open Connections:",
      detail: status.dependencies.database.opened_connections,
    },
    {
      info: "Latency:",
      detail: `${status.dependencies.database.latency.first_query}ms ${status.dependencies.database.latency.second_query}ms ${status.dependencies.database.latency.third_query}ms`,
    },
    {
      info: "Postgres Version:",
      detail: status.dependencies.database.version,
    },
  ];

  const serverInfo = [
    {
      info: "Status:",
      detail: status.dependencies.webserver.status,
    },
    {
      info: "Provider:",
      detail: status.dependencies.webserver.provider,
    },
    {
      info: "Environment:",
      detail: status.dependencies.webserver.environment,
    },
    {
      info: "Timezone:",
      detail: status.dependencies.webserver.timezone,
    },
    {
      info: "Node.js version:",
      detail: status.dependencies.webserver.version,
    },
  ];

  return (
    <>
      <ContainerDetails>
        <ContainerServers>
          <Text
            text={"Database"}
            color={"#FFF"}
            fontSize={"24px"}
            fontWeight={"600"}
            marginBottom={"0px"}
          />
          {dataBaseInfo.map((item, index) => (
            <ContainerInfo key={index}>
              <Text
                text={item.info}
                color={"#FFF"}
                fontSize={"14px"}
                fontWeight={"300"}
                marginBottom={"0px"}
              />
              <CardInfo text={item.detail} />
            </ContainerInfo>
          ))}
        </ContainerServers>
        <ContainerServers>
          <Text
            text={"Web Server"}
            color={"#FFF"}
            fontSize={"24px"}
            fontWeight={"600"}
            marginBottom={"0px"}
          />
          {serverInfo.map((item, index) => (
            <ContainerInfo key={index}>
              <Text
                text={item.info}
                color={"#FFF"}
                fontSize={"14px"}
                fontWeight={"300"}
                marginBottom={"0px"}
              />
              <CardInfo text={item.detail} />
            </ContainerInfo>
          ))}
        </ContainerServers>
      </ContainerDetails>
    </>
  );
}

export default Details;
