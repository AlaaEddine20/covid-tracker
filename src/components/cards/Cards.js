import React from "react";
import Paper from "@material-ui/core/Paper";
import styles from "./Styles.module.scss";

const Cards = ({ confirmed, recovered, deaths, lastUpdate }) => {
  return (
    <div className={styles.cards_container}>
      <Paper className={styles.confirmed_card} elevation={3}>
        <h2>Confirmed</h2>
        {confirmed ? (
          <p>{confirmed.value.toLocaleString("en")}</p>
        ) : (
          <p>Loading...</p>
        )}
      </Paper>
      <Paper className={styles.confirmed_card} elevation={4}>
        <h2>Recovered</h2>
        {recovered ? (
          <p>{recovered.value.toLocaleString("en")}</p>
        ) : (
          <p>Loading...</p>
        )}
      </Paper>
      <Paper className={styles.confirmed_card} elevation={4}>
        <h2>Deaths</h2>
        {deaths ? (
          <p>{deaths.value.toLocaleString("en")}</p>
        ) : (
          <p>Loading...</p>
        )}
      </Paper>
    </div>
  );
};

export default Cards;
