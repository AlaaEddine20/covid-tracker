import React, { useEffect, useState } from "react";
import styles from "./Styles.module.scss";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  return (
    <div className={styles.cards_container}>
      <div>
        <h1>Confirmed</h1>
        {confirmed.value ? (
          <p>{confirmed.value.toLocaleString("en")}</p>
        ) : (
          <p>Loading..."</p>
        )}
      </div>
      <div>
        <h1>Recovered</h1>
        {recovered.value ? (
          <p>{recovered.value.toLocaleString("en")}</p>
        ) : (
          <p>Loading..."</p>
        )}
      </div>
      <div>
        <h1>Deaths</h1>
        {deaths.value ? (
          <p>{deaths.value.toLocaleString("en")}</p>
        ) : (
          <p>Loading..."</p>
        )}
      </div>
    </div>
  );
};

export default Cards;
