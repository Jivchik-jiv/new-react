import React from "react";
import styles from "./Counter.module.css";

const Clicker = ({ handleIncrement, handleDecrement }) => {
  const handleClick = (e) => {
    if (e.target.name === "add") {
      handleIncrement();
    }
    if (e.target.name === "subtract") {
        handleDecrement();
    }
  };

  return (
    <div className={styles.clicker}>
      <button
        type="button"
        className={styles.btn}
        onClick={handleClick}
        name="add"
      >
        Increase
      </button>
      <button
        type="button"
        className={styles.btn}
        onClick={handleClick}
        name="subtract"
      >
        Decrease
      </button>
    </div>
  );
};

export default Clicker;
