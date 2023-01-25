import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/styles.module.scss";

const Button = ({ path, type, children, isFormValid }) => {
  let buttonStyle = styles.button;
  let nextPath = path;

  if (type === "success") {
    buttonStyle = `${buttonStyle} ${styles.success}`;
  }

  if (!isFormValid) {
    buttonStyle = `${buttonStyle} ${styles.disable}`;
    nextPath = null;
  }

  return (
    <Link to={nextPath}>
      <button className={buttonStyle}> {children}</button>
    </Link>
  );
};

export default Button;
