import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/styles.module.scss";

const Button = ({ text, path, type }) => {
  let buttonStyle = styles.primaryButton;

  if (type === "success") {
    buttonStyle = styles.confirmButton;
  }

  return (
    <Link to={path}>
      <button className={buttonStyle}>{text}</button>
    </Link>
  );
};

export default Button;
