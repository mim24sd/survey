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
          <TextInput label="Name" minlength={2} isRequired={true} />
        </li>
        <li>
          <TextInput label="Family" minlength={2} isRequired={true} />
        </li>
        <li>
          <DateInput label="Birth Date" isRequired={true} />
        </li>
      </ul>
    );
  }
  return section;
};

export default PersonalInformation;
