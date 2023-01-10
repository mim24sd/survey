import React from "react";
import styles from "./styles/styles.module.scss";

const DateInput = ({ title, isRequired }) => {
  let dateInput = (
    <label className={styles.label}>
      {title}
      <input className={styles.input} type="date" />
    </label>
  );

  if (isRequired) {
    dateInput = (
      <label className={styles.label}>
        {title}
        <input className={styles.input} type="date" required />
      </label>
    );
  }

  return dateInput;
};

export default DateInput;
