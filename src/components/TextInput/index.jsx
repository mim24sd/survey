import React, { useState } from "react";
import styles from "./styles/styles.module.scss";

const TextInput = ({ label, minlength, isRequired = true }) => {
  let [inputStyle, setInputStyle] = useState(styles.input);
  let [errorText, setErrorText] = useState("");

  const handleInputValue = (event) => {
    if (event.target.value.length === 0) {
      setInputStyle(`${inputStyle} ${styles.error} ${styles.errorBox}`);
      setErrorText("can't be empty");
    } else if (event.target.value.length < 2) {
      setInputStyle(`${inputStyle} ${styles.error} ${styles.errorBox}`);
      setErrorText("must be at least 2 characters long");
    }
  };

  let textInput = isRequired ? (
    <label className={styles.label}>
      {label}
      <input
        className={inputStyle}
        type="text"
        minlength={minlength}
        required
        onBlur={(event) => {
          handleInputValue(event);
        }}
      />
      <p className={styles.errorText}>{errorText}</p>
    </label>
  ) : (
    <label className={styles.label}>
      {label}
      <input
        className={inputStyle}
        type="text"
        minlength={minlength}
        onBlur={(event) => {
          handleInputValue(event);
        }}
      />
      <p className={styles.errorText}>{errorText}</p>
    </label>
  );

  return textInput;
};

export default TextInput;
