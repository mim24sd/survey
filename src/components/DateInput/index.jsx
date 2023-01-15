import React from "react";
import styles from "./styles/styles.module.scss";

const DateInput = ({ title, isRequired = true }) => {
  return (
    <label className={styles.label}>
      {title}
      <input className={styles.input} type="date" required={isRequired} />
    </label>
  );
};

export default DateInput;
