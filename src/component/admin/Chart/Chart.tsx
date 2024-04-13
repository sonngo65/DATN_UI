import Chart from "chart.js";
import { useRef, useEffect, useState } from "react";

interface Props {
  chartData: number[];
}

const MyChart = ({ chartData }: Props) => {
  // helper function to format chart data since you do this twice
  const formatData = (data: number[]): Chart.ChartData => ({
    labels: [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        label: "Order",
        data: data,
        borderColor: "#1115f0",
        backgroundColor: "rgba(17, 21, 240,0.2)",
        fill: "start",
      },
    ],
  });

  // use a ref to store the chart instance since it it mutable
  const chartRef = useRef<Chart | null>(null);

  // callback creates the chart on the canvas element
  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      chartRef.current = new Chart(ctx, {
        type: "line",
        data: formatData(chartData),
        options: {
          responsive: true,
          tooltips: {
            intersect: false,
            backgroundColor: "rgb(0, 0, 0,1)",
            borderColor: "rgba(180, 180, 180, 0.3)",
            bodyAlign: "center",
            xPadding: 20,
            cornerRadius: 12,
            yPadding: 10,
            displayColors: false,
          },
          plugins: {
            filler: {
              propagate: false,
            },
          },
          elements: {
            line: {
              tension: 0.4,
            },
          },
        },
      });
    }
  };

  // effect to update the chart when props are updated
  useEffect(() => {
    // must verify that the chart exists
    if (chartRef.current) {
      chartRef.current.data = formatData(chartData);
      chartRef.current.update();
    }

    // cleanup function - I had to remove this as it was causing errors
    /*return () => {
      chartRef.current?.destroy();
    };*/
  }, [chartData]);

  return (
    <div className="self-center chart mb-5">
      <div className="py-3">
        <button className="btn-control rounded-pill btn btn-outline-dark py-0 px-1 active">
          30 Days
        </button>
        <button className="btn-control rounded-pill btn btn-outline-dark py-0 px-1 ms-3">
          12 Months
        </button>
      </div>
      <div className="pb-5">
        <canvas ref={canvasCallback}></canvas>
      </div>
    </div>
  );
};
export default MyChart;
