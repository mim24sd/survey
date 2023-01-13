import React, { useState } from "react";
import styles from "./styles/styles.module.scss";

const TextInput = ({ label, minlength, isRequired = true }) => {
  // let [inputStyle, setInputStyle] = useState(styles.input);
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
        minlength={minlength}
        required
        onBlur={handleInputValue}
      />
      <p className={styles.errorText}>{errorText}</p>
    </label>
  ) : (
    <label className={styles.label}>
      {label}
      <input
        className={`${styles.input} ${errorText ? styles.error : ""}`}
        type="text"
        minlength={minlength}
        onBlur={handleInputValue}
      />
      <p className={styles.errorText}>{errorText}</p>
    </label>
  );

  return textInput;
};

export default TextInput;
