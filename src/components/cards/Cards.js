import React from "react";
import Paper from "@material-ui/core/Paper";
import styles from "./Styles.module.scss";
import { Typography } from "@material-ui/core";

const Cards = ({ confirmed, recovered, deaths, lastUpdate }) => {
  return (
    <div className={styles.cards_container}>
      <Paper className={styles.confirmed_card} elevation={3}>
        <Typography variant="h5" gutterBottom>
          Confirmed
        </Typography>
        {confirmed ? (
          <p>{confirmed.value.toLocaleString("en")}</p>
        ) : (
          <p>Loading...</p>
        )}
      </Paper>
      <Paper className={styles.confirmed_card} elevation={4}>
        <Typography variant="h5" gutterBottom>
          Recovered
        </Typography>
        {recovered ? (
          <p>{recovered.value.toLocaleString("en")}</p>
        ) : (
          <p>Loading...</p>
        )}
      </Paper>
      <Paper className={styles.confirmed_card} elevation={4}>
        <Typography variant="h5" gutterBottom>
          Deaths
        </Typography>
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
