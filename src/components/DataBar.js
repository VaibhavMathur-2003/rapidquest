import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const DataBar = () => {
  const data = {
    labels: ["20", "25", "30", "35", "40", "60", "65"],
    datasets: [
      {
        label: "Employer",
        data: [26.15, 38.45, 50.75, 63.05, 75.35, 87.65, 100],
        backgroundColor: "darkblue",
      },
      {
        label: "Employee",
        data: [
          23.85,
          73 - 38.45,
          96 - 50.75,
          119 - 63.05,
          142 - 75.35,
          176.5 - 87.65,
          88,
        ],
        backgroundColor: "#4433ff",
      },
      {
        label: "Total Interest",
        data: [20, 25, 30, 60, 70, 100, 105, 120],
        backgroundColor: "#61DBFB",
      },
    ],
  };
  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    barPercentage: 0.5,
    maintainAspectRatio: false, // Set to false to allow the chart to occupy its parent container's size
    responsive: true,
  };
  return (
    <div style={{ height: "250px" }}>
      {" "}
      {/* Adjust the width and height as desired */}
      <Bar data={data} options={options} />
    </div>
  );
};
export default DataBar;
