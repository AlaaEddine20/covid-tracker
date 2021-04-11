import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/index";
import styles from "./Styles.module.scss";

const Charts = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const dataFetch = async () => {
      const fetchedData = await fetchDailyData();
      setDailyData(fetchedData);
    };
    dataFetch();
  }, []);

  return (
    <div className={styles.charts_container}>
      <h2>Charts</h2>
    </div>
  );
};

export default Charts;
