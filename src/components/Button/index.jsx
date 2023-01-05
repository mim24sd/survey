import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/styles.module.scss";

const Button = ({ title, path }) => {
  let buttonStyle = styles.primaryButton;

  if (title === "Confirm") {
    buttonStyle = styles.confirmButton;
  }

  return (
    <Link to={path}>
      <button className={buttonStyle}>{title}</button>
    </Link>
  );
};

export default Button;
