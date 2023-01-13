import React from "react";
import { useLocation } from "react-router-dom";
import DateInput from "../DateInput/index.jsx";
import TextInput from "../TextInput/index.jsx";
import styles from "./styles/styles.module.scss";

const PersonalInformation = () => {
  const location = useLocation();
  let section = <ul></ul>;

  if (location.pathname === "/") {
    section = (
      <ul className={styles.list}>
        <li>
          <TextInput title="Name" minlength={2} />
        </li>
        <li>
          <TextInput title="Family" minlength={2} />
        </li>
        <li>
          <DateInput title="Birth Date" />
        </li>
      </ul>
    );
  }
  return section;
};

export default PersonalInformation;
