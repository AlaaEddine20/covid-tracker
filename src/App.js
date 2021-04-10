import React, { useEffect, useState } from "react";
// functions
import { fetchData } from "./api/index";
// components
import Cards from "./components/cards/Cards";
import Charts from "./components/charts/Charts";
import CountryPicker from "./components/country_picker/CountryPicker";
import Logo from "./components/logo/Logo";
// styles
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
      <div className={styles.top_view}>
        <div>
          <Logo />
        </div>
        <div>
          <CountryPicker />
        </div>
      </div>
      <Charts />
      <Cards data={data} />
    </div>
  );
}

export default App;
