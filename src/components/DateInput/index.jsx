import React from "react";
import styles from "./styles/styles.module.scss";

const DateInput = ({ title, isRequired = true, value, onChange }) => {
  return (
    <label className={styles.label}>
      {title}
      <input
        className={styles.input}
        type="date"
        value={value}
        required={isRequired}
        onChange={onChange}
      />
    </label>
  );
};

export default DateInput;
