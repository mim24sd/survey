import React from "react";
import styles from "./styles/styles.module.scss";

const Checkbox = ({ question, options, required, onChange }) => {
  const handleChangeCheckbox = (event) => {
    const isChecked = event.target.checked;
    const textInputValue = event.target.parentElement.textContent;

    onChange(isChecked, textInputValue);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{question}</h2>
      {options.map((option) => (
        <label className={styles.item} key={option}>
          <input
            type="checkbox"
            required={required}
            onChange={(event) => handleChangeCheckbox(event)}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
