import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { ContainerLineChart } from "src/styles/components/Status/Chart/Chart.style";

const LineChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let chart: Chart;
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
                data: [5, 10],
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
    return () => {
      if (chartRef.current) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <>
      <ContainerLineChart>
        <canvas ref={chartRef}></canvas>
      </ContainerLineChart>
    </>
  );
};

export default LineChart;
