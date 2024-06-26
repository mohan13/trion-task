"use client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from "chart.js/auto";
import { IcarsDetails, car_details } from "@/components/Constants/car-details";
import { FaChevronDown } from "react-icons/fa";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);
export const Chart = () => {
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const price = car_details.map((item: IcarsDetails) => item.price_perday);
  const another_price = [30, 50, 20, 40];

  const lineChartData = {
    labels: [
      "Jan ",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [...another_price],
        borderColor: "#656575",
        borderWidth: 1,
        tension: 0.5,
        borderDash: [5, 8],
        fill: false,
      },
      {
        data: [...price],
        borderColor: "rgb(75,192,192",
        borderWidth: 1,
        tension: 0.5,
        fill: true,
        // backgroundColor: "#FFB1C1",
        backgroundColor: (context: any) => {
          const { ctx, chartArea } = context.chart;

          if (!chartArea) {
            // This case happens on initial chart rendering
            return null;
          }
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom,
          );
          gradient.addColorStop(0, "#006AFF");
          gradient.addColorStop(1, "#D9D9D9");

          return gradient;
        },
      },
    ],
  };
  return (
    <div className="sm:px-7 px-3 py-4 sm:py-8 rounded-lg grid gap-2 shadow-md overflow-x-auto  ">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h2 className="text-lg font-semibold">Total Income</h2>
        </div>
        <div className="flex items-center text-gray-400">
          <div>Mar 2022 - Oct 2022</div>
          <FaChevronDown />
        </div>
      </div>
      <div className="canvas-container">
        {" "}
        <Line options={options} data={lineChartData} />
      </div>
    </div>
  );
};
