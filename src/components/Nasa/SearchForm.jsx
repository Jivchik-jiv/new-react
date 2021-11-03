import React from "react";
import styles from "./Nasa.module.css";

const SearchForm = ({ onSubmit, onDateChange, startDate, endDate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        <input
          type="date"
          value={startDate}
          onChange={onDateChange}
          name="start"
        />
        Start date
      </label>
      <label>
        <input type="date" value={endDate} onChange={onDateChange} name="end" />
        End date
      </label>
      <button className={styles.btn}>Search</button>
    </form>
  );
};

export default SearchForm;
