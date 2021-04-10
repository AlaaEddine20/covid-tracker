import React from "react";
// libs
import CountUp from "react-countup";
import classnames from "classnames";
// components
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

import styles from "./Styles.module.scss";

const Cards = ({ infected, recovered, deaths, lastUpdate }) => {
  return (
    <div className={styles.cards_container}>
      <Paper
        className={classnames(styles.infected_card, styles.animated_inf)}
        elevation={3}
      >
        <Typography variant="h5" gutterBottom>
          Infected
        </Typography>
        {infected ? (
          <Typography variant="p">
            <CountUp
              start={0}
              end={infected.value}
              duration={2}
              separator="'"
            />
          </Typography>
        ) : (
          <p>Loading...</p>
        )}
      </Paper>
      <Paper className={styles.recovered_card} elevation={4}>
        <Typography variant="h5" gutterBottom>
          Recovered
        </Typography>
        {recovered ? (
          <Typography variant="p">
            <CountUp
              start={0}
              end={recovered.value}
              duration={2}
              separator="'"
            />
          </Typography>
        ) : (
          <p>Loading...</p>
        )}
      </Paper>
      <Paper className={styles.deaths_card} elevation={4}>
        <Typography variant="h5" gutterBottom>
          Deaths
        </Typography>
        {deaths ? (
          <Typography variant="p">
            <CountUp start={0} end={deaths.value} duration={2} separator="'" />
          </Typography>
        ) : (
          <p>Loading...</p>
        )}
      </Paper>
    </div>
  );
};

export default Cards;
