import React from "react";
// chart components/elements
import { Line } from "react-chartjs-2";

const LineChart = ({ dailyData }) => {
  console.log(dailyData);
  return (
    <>
      <Line
        data={{
          labels: dailyData.map((data) => data.date),
          datasets: [
            {
              data: dailyData.map((data) => data.confirmed),
              label: "Infected",
              borderColor: "#fcca46",
              fill: true,
            },
            {
              data: dailyData.map((data) => data.deaths),
              label: "Deaths",
              borderColor: "#ff6b6b",
              fill: true,
            },
          ],
        }}
      />
    </>
  );
};

export default LineChart;
