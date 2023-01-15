import React from "react";
import styles from "./styles/styles.module.scss";

const DateInput = ({ title, isRequired = true }) => {
  let dateInput = isRequired ? (
    <label className={styles.label}>
      {title}
      <input className={styles.input} type="date" required />
    </label>
  ) : (
    <label className={styles.label}>
      {title}
      <input className={styles.input} type="date" />
    </label>
  );

  return dateInput;
};

export default DateInput;
