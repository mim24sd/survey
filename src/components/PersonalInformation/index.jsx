import React, { useContext } from "react";
import DateInput from "../DateInput/index.jsx";
import TextInput from "../TextInput/index.jsx";
import styles from "./styles/styles.module.scss";
import SurveyInformation from "../SurveyInformation/index.jsx";

const PersonalInformation = () => {
  const [surveyInfo, setSurveyInfo] = useContext(SurveyInformation);

  function onChange(title, event) {
    setSurveyInfo((prevUser) => ({
      ...prevUser,
      user: {
        ...prevUser.user,
        [title]: event.target.value,
      },
    }));
  }

  return (
    <ul className={styles.list}>
      <li>
        <TextInput
          label="Name"
          value={surveyInfo.user.name}
          minLength={2}
          onChange={(event) => onChange("name", event)}
        />
      </li>
      <li>
        <TextInput
          label="Family"
          value={surveyInfo.user.family}
          minLength={2}
          onChange={(event) => onChange("family", event)}
        />
      </li>
      <li>
        <DateInput
          label="Birth Date"
          value={surveyInfo.user.birthDate}
          onChange={(event) => onChange("birthDate", event)}
        />
      </li>
    </ul>
  );
};

export default PersonalInformation;
