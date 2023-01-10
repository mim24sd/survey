import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/styles.module.scss";

const Button = ({ path, type, children }) => {
  let buttonStyle = styles.button;

  if (type === "success") {
    buttonStyle = `${buttonStyle} ${styles.success}`;
  }

  return (
    <Link to={path}>
      <button className={buttonStyle}> {children}</button>
    </Link>
  );
};

export default Button;
