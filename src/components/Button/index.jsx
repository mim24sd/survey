import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/styles.module.scss";

const Button = ({ text, path, type }) => {
  let buttonStyle = styles.primary;

  if (type === "success") {
    buttonStyle = styles.success;
  }

  return (
    <Link to={path}>
      <button className={[buttonStyle, styles.button].join(" ")}>{text}</button>
    </Link>
  );
};

export default Button;
