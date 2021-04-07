import React, { useEffect, useState } from "react";
import { fetchData } from "./api/index";
import styles from "./App.module.scss";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function dataFetch() {
      const fetchedData = await fetchData();
      setData(fetchedData);
    }
    dataFetch();
  }, []);

  return (
    <div className={styles.container}>
      <h1>App</h1>
    </div>
  );
}

export default App;
