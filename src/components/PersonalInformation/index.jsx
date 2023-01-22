import React, { useContext, useState } from "react";
import DateInput from "../DateInput/index.jsx";
import TextInput from "../TextInput/index.jsx";
import styles from "./styles/styles.module.scss";
import SurveyInformation from "../SurveyInformation/index.jsx";

const PersonalInformation = () => {
  const [_, setSurveyInfo] = useContext(SurveyInformation);
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [birthDate, setBirthDate] = useState("");

  function onChange(title, event) {
    const value = event.target.value;

    setStates(title, value);
    setSurveyInfo((prevUser) => ({
      ...prevUser,
      user: {
        ...prevUser.user,
        [title]: value,
      },
    }));
    console.log(_);
  }

  function setStates(title, value) {
    if (title === "name") {
      setName(value);
    } else if (title === "family") {
      setFamily(value);
    } else {
      setBirthDate(value);
    }
  }

  let section = <ul></ul>;

  section = (
    <ul className={styles.list}>
      <li>
        <TextInput
          label="Name"
          value={name}
          minLength={2}
          onChange={(event) => onChange("name", event)}
        />
      </li>
      <li>
        <TextInput
          label="Family"
          value={family}
          minLength={2}
          onChange={(event) => onChange("family", event)}
        />
      </li>
      <li>
        <DateInput
          label="Birth Date"
          value={birthDate}
          onChange={(event) => onChange("birthDate", event)}
        />
      </li>
    </ul>
  );

  return section;
};

export default PersonalInformation;
