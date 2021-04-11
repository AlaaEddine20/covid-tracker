import React from "react";
// libs
import CountUp from "react-countup";
import classnames from "classnames";
// components
import { Typography, Grid, Card } from "@material-ui/core";
// styles
import styles from "./Styles.module.scss";

const Cards = ({ infected, recovered, deaths, lastUpdate }) => {
  return (
    <div className={styles.cards_container}>
      <Grid
        item
        component={Card}
        className={classnames(styles.infected_card, styles.card)}
      >
        <Typography variant="h5" gutterBottom>
          Infected
        </Typography>
        {infected ? (
          <>
            <Typography variant="h6" gutterBottom>
              <CountUp
                start={0}
                end={infected.value}
                duration={2}
                separator="'"
              />
            </Typography>
            <Typography color="secondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Grid>

      <Grid
        item
        component={Card}
        className={classnames(styles.recovered_card, styles.card)}
        elevation={4}
      >
        <Typography variant="h5" gutterBottom>
          Recovered
        </Typography>
        {recovered ? (
          <>
            <Typography variant="h6">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                separator="'"
              />
            </Typography>
            <Typography color="secondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Grid>

      <Grid
        item
        component={Card}
        className={classnames(styles.deaths_card, styles.card)}
      >
        <Typography variant="h5" gutterBottom>
          Deaths
        </Typography>
        {deaths ? (
          <>
            <Typography variant="h6">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2}
                separator="'"
              />
            </Typography>
            <Typography color="secondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Grid>
    </div>
  );
};

export default Cards;
