import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { LinearScale, CategoryScale } from "chart.js";

Chart.register(LinearScale, CategoryScale);

const data = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Assets",
        fill: false,
        backgroundColor: "linear-gradient(0deg, #FFFFFF 0%, #82D616 100%)",
        borderColor: "#82D616",
        borderWidth: 3.5,
        pointRadius: 0,
        pointBackgroundColor: "#82D616",
        borderJoinStyle: "miter",
        pointStyle: "line",
        data: [30, 15, 300, 200, 500, 250, 400, 220, 500],
        lineTension: 0.4,
      },
      {
        label: "Liability",
        fill: "true",
        backgroundColor: "linear-gradient(0deg, #FFFFFF 0%, #82D616 100%)",
        borderColor: "#FF8540",
        borderWidth: 3.5,
        pointRadius: 0,
        pointBackgroundColor: "#FF8540",
        borderJoinStyle: "miter",
        pointStyle: "line",
        data: [10, 100, 200, 10, 150, 100, 450, 60, 420],
        lineTension: 0.4,
      },
    ],
  };

const options = {
    plugins: {
        legend: {
          display: true,
          position: "bottom",
        //   labels: {
        //     usePointStyle: true,
        //     boxWidth: 0,
        //   },
        },
      },
  scales: {
    y: {
      min: 0,
      max: 500,
      ticks: {
        stepSize: 100,
      },
      // grid:{
      //     borderDash: [3],
      //     borderDashOffset: 2,
      // }
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};


const Middle = () => {
  return (
    <div
      className=" bg-white ml-2   shadow-sm border rounded-xl border-gray-100"
      style={{  width: "100%" }}
    >
      <div className="border-b p-3 border-gray-100">
        <p className="text-gray-600">Assets & Liablities</p>
      </div>
      <div style={{ height: "100%", width: "100%" }}>
        <Line data={data} options={options} />
      </div>
    </div>
    //     <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
    //         <Line data={data} options={{ maintainAspectRatio: false }} />
    //   </div>
  );
};

export default Middle;
