import React from "react";
import styles from "./Styles.module.scss";

const Cards = ({ data }) => {
  return (
    <div className={styles.cards_container}>
      <div>
        <h1>Card 1</h1>
      </div>
      <div>
        <h1>Card 2</h1>
      </div>
      <div>
        <h1>Card 3</h1>
      </div>
    </div>
  );
};

export default Cards;
