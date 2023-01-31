import React from "react";
import styles from "./styles/styles.module.scss";

const Checkbox = ({ question, options, onChange }) => {
  const handleChangeCheckbox = (event) => {
    const isChecked = event.target.checked;

    onChange(isChecked, event.target.parentElement.textContent);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{question}</h2>
      {options.map((option) => (
        <label className={styles.item}>
          <input
            type="checkbox"
            onChange={(event) => handleChangeCheckbox(event)}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
