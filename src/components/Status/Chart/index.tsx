import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { ContainerLineChart } from "src/styles/components/Status/Chart/Chart.style";
require("dotenv").config();

const LineChart = () => {
  const [janeiro, setJaneiro] = useState<number>(0);
  const [fevereiro, setFevereiro] = useState<number>(0);
  const [marco, setMarco] = useState<number>(0);
  const [abril, setAbril] = useState<number>(0);
  const [maio, setMaio] = useState<number>(0);
  const [junho, setJunho] = useState<number>(0);
  const [julho, setJulho] = useState<number>(0);
  const [agosto, setAgosto] = useState<number>(0);
  const [setembro, setSetembro] = useState<number>(0);
  const [outubro, setOutubro] = useState<number>(0);
  const [novembro, setNovembro] = useState<number>(0);
  const [dezembro, setDezembro] = useState<number>(0);

  const chartRef = useRef<HTMLCanvasElement | null>(null);
  let chart: Chart;

  async function getTotalAccessMonth() {
    const endpoint = process.env.ENDPOINT || "";
    await fetch(`${endpoint}/api/v1/total-access`, {
      method: "GET",
    })
      .then(async (response) => {
        const result = await response.json();
        setJaneiro(result.data.result[0]);
        setFevereiro(result.data.result[1]);
        setMarco(result.data.result[2]);
        setAbril(result.data.result[3]);
        setMaio(result.data.result[4]);
        setJunho(result.data.result[5]);
        setJulho(result.data.result[6]);
        setAgosto(result.data.result[7]);
        setSetembro(result.data.result[8]);
        setOutubro(result.data.result[9]);
        setNovembro(result.data.result[10]);
        setDezembro(result.data.result[11]);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  useEffect(() => {
    function renderChart() {
      if (chartRef.current) {
        const ctx = chartRef.current.getContext("2d");
        if (ctx) {
          chart = new Chart(ctx, {
            type: "line",
            data: {
              labels: [
                "JANEIRO",
                "FEVEREIRO",
                "MARÇO",
                "ABRIL",
                "MAIO",
                "JUNHO",
                "JULHO",
                "AGOSTO",
                "SETEMBRO",
                "OUTUBRO",
                "NOVEMBRO",
                "DEZEMBRO",
              ],
              datasets: [
                {
                  label: "QUANTIDADE DE ACESSOS",
                  data: [
                    janeiro,
                    fevereiro,
                    marco,
                    abril,
                    maio,
                    junho,
                    julho,
                    agosto,
                    setembro,
                    outubro,
                    novembro,
                    dezembro,
                  ],
                  fill: false,
                  borderColor: "#6D9DD0",
                  borderWidth: 2,
                  pointRadius: 5,
                  pointHoverRadius: 8,
                },
              ],
            },
            options: {
              scales: {
                x: {
                  ticks: {
                    color: "white",
                  },
                  grid: {
                    color: "rgba(255, 255, 255, 0.1)",
                  },
                },
                y: {
                  ticks: {
                    color: "white",
                    stepSize: 5,
                  },
                  grid: {
                    color: "rgba(255, 255, 255, 0.1)",
                  },
                  min: 0,
                  max: 50,
                },
              },
              plugins: {
                legend: {
                  labels: {
                    color: "white",
                  },
                },
              },
              responsive: true,
            },
          });
        }
      }
    }
    getTotalAccessMonth();
    renderChart();
    return () => {
      if (chartRef.current) {
        chart.destroy();
      }
    };
  }, [
    janeiro,
    fevereiro,
    marco,
    abril,
    maio,
    junho,
    julho,
    agosto,
    setembro,
    outubro,
    novembro,
    dezembro,
  ]);

  return (
    <>
      <ContainerLineChart>
        <canvas ref={chartRef}></canvas>
      </ContainerLineChart>
    </>
  );
};

export default LineChart;
