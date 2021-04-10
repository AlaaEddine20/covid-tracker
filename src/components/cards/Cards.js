import React from "react";
import styles from "./Styles.module.scss";

const Cards = ({ confirmed, recovered, deaths, lastUpdate }) => {
  return (
    <div className={styles.cards_container}>
      <div className={styles.confirmed_card}>
        <h2>Confirmed</h2>
        {confirmed ? (
          <p>{confirmed.value.toLocaleString("en")}</p>
        ) : (
          <p>Loading..."</p>
        )}
      </div>
      <div className={styles.recovered_card}>
        <h2>Recovered</h2>
        {recovered ? (
          <p>{recovered.value.toLocaleString("en")}</p>
        ) : (
          <p>Loading..."</p>
        )}
      </div>
      <div className={styles.deaths_card}>
        <h2>Deaths</h2>
        {deaths ? (
          <p>{deaths.value.toLocaleString("en")}</p>
        ) : (
          <p>Loading..."</p>
        )}
      </div>
    </div>
  );
};

export default Cards;
