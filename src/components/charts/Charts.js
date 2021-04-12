import React, { useState, useEffect } from "react";
// fetchAPI
import { fetchDailyData } from "../../api/index";
// components
import LineChart from "./LineChart.js";
// styles
import styles from "./Styles.module.scss";

const Charts = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    const fetchedData = await fetchDailyData();
    setDailyData(fetchedData);
  };

  return (
    <div className={styles.charts_container}>
      {dailyData[0] ? <LineChart dailyData={dailyData} /> : null}
    </div>
  );
};

export default Charts;
