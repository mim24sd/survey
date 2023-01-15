import React, { useState } from "react";
import styles from "./styles/styles.module.scss";

const TextInput = ({ label, minLength, isRequired = true }) => {
  let [errorText, setErrorText] = useState("");

  const handleInputValue = (event) => {
    const textLength = event.target.value.length;

    if (textLength === 0) {
      setErrorText("Can't be empty.");
    } else if (textLength < { minLength }) {
      setErrorText(`Must be at least ${minLength} characters Long`);
    } else {
      setErrorText("");
    }
  };

  return (
    <label className={styles.label}>
      {label}
      <input
        className={`${styles.input} ${errorText ? styles.error : ""}`}
        type="text"
        minLength={minLength}
        required={isRequired}
        onBlur={handleInputValue}
      />
      {errorText && <p className={styles.errorText}>{errorText}</p>}
    </label>
  );
};

export default TextInput;
