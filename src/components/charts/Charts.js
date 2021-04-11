import React, { useState, useEffect } from "react";
// fetchAPI
import { fetchDailyData } from "../../api/index";
// chart components/elements
import { Line, Bar } from "react-chartjs-2";
// styles
import styles from "./Styles.module.scss";

const Charts = () => {
  const [dailyData, setDailyData] = useState({});

  const dataFetch = async () => {
    const fetchedData = await fetchDailyData();
    setDailyData(fetchedData);
  };

  useEffect(() => {
    dataFetch();
    console.log("daily data useEffect", dailyData);
  }, []);

  return (
    <div className={styles.charts_container}>
      <h2>Charts</h2>
    </div>
  );
};

export default Charts;
