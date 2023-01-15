import React, { useState } from "react";
import styles from "./styles/styles.module.scss";

const TextInput = ({ label, minLength, isRequired = true }) => {
  let [errorText, setErrorText] = useState("");

  const handleInputValue = (event) => {
    if (event.target.value.length === 0) {
      setErrorText("can't be empty");
    } else if (event.target.value.length < 2) {
      setErrorText("must be at least 2 characters long");
    } else {
      setErrorText("");
    }
  };

  let textInput = isRequired ? (
    <label className={styles.label}>
      {label}
      <input
        className={`${styles.input} ${errorText ? styles.error : ""}`}
        type="text"
        minLength={minLength}
        required
        onBlur={handleInputValue}
      />
      {errorText && <p className={styles.errorText}>{errorText}</p>}
    </label>
  ) : (
    <label className={styles.label}>
      {label}
      <input
        className={`${styles.input} ${errorText ? styles.error : ""}`}
        type="text"
        minLength={minLength}
        onBlur={handleInputValue}
      />
      {errorText && <p className={styles.errorText}>{errorText}</p>}
    </label>
  );

  return textInput;
};

export default TextInput;
