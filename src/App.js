import React, { useEffect, useState } from "react";
import { fetchData } from "./api/index";
import Cards from "./components/cards/Cards";
import Charts from "./components/charts/Charts";
import CountryPicker from "./components/country_picker/CountryPicker";
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
      <CountryPicker />
      <Charts />
      <Cards data={data} />
    </div>
  );
}

export default App;
