import React, { useEffect, useState } from "react";
// functions
import { fetchData } from "../../api/index";
// components
import Cards from "../cards/Cards";
import Charts from "../charts/Charts";
import CountryPicker from "../country_picker/CountryPicker";
import Logo from "../logo/Logo";
import styles from "./Styles.module.scss";

const MainView = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function dataFetch() {
      const fetchedData = await fetchData();
      setData(fetchedData);
      console.log(data);
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
      <Cards
        infected={data.confirmed}
        recovered={data.recovered}
        deaths={data.deaths}
      />
    </div>
  );
};

export default MainView;
