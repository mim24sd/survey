import React, { useContext } from "react";
import DateInput from "../DateInput/index.jsx";
import TextInput from "../TextInput/index.jsx";
import styles from "./styles/styles.module.scss";
import SurveyInformation from "../SurveyInformation/index.jsx";

let isValid = [false, false, false];

const PersonalInformation = () => {
  const [surveyInfo, setSurveyInfo] = useContext(SurveyInformation);

  function onChange(label, event) {
    const value = event.target.value;

    isDateInputValid(label, value);
    setInformation(label, value);
  }

  function isTextInputValid(label, validation) {
    if (label === "Name") {
      isValid[0] = validation;
    } else if (label === "Family") {
      isValid[1] = validation;
    }
  }

  function isDateInputValid(label, value) {
    if (label === "birthDate") {
      isValid[2] = value !== surveyInfo.personalInformation.birthDate;
    }
  }

  function isFormValid() {
    return isValid.every((element) => element);
  }

  function setInformation(label, value) {
    setSurveyInfo((prevUser) => ({
      ...prevUser,
      personalInformation: {
        ...prevUser.personalInformation,
        [label]: value,
        isValid: isFormValid(),
      },
    }));
  }

  return (
    <ul className={styles.list}>
      <li>
        <TextInput
          label="Name"
          value={surveyInfo.personalInformation.name}
          minLength={2}
          onChange={(event) => onChange("name", event)}
          isValid={isTextInputValid}
        />
      </li>
      <li>
        <TextInput
          label="Family"
          value={surveyInfo.personalInformation.family}
          minLength={2}
          onChange={(event) => onChange("family", event)}
          isValid={isTextInputValid}
        />
      </li>
      <li>
        <DateInput
          label="Birth Date"
          value={surveyInfo.personalInformation.birthDate}
          onChange={(event) => onChange("birthDate", event)}
        />
      </li>
    </ul>
  );
};

export default PersonalInformation;
