import React, { useContext } from "react";
import Checkbox from "../Checkbox/index.jsx";
import SurveyInformation from "../SurveyInformation/index.jsx";
import styles from "../PersonalInformation/styles/styles.module.scss";

const ProgrammingLanguages = () => {
  const languages = [
    "JavaScript",
    "Python",
    "Go",
    "C++",
    "C",
    "PHP",
    "C#",
    "Ruby",
  ];
  const question = "Choose your programming language.";
  const [surveyInfo, setSurveyInfo] = useContext(SurveyInformation);

  function onChange(isChecked, language) {
    let languages = surveyInfo.programmingLanguages.languages;

    if (isChecked) {
      languages.push(language);
    } else {
      languages = languages.filter((eachLanguage) => eachLanguage !== language);
    }

    setSurveyInfo((prevUser) => ({
      ...prevUser,
      programmingLanguages: {
        languages: languages,
        isValid: isValid(languages),
      },
    }));
  }

  function isValid(languages) {
    console.log(languages.length);
    return languages.length > 0 ? true : false;
  }

  return (
    <ul className={styles.list}>
      <li>
        <Checkbox question={question} options={languages} onChange={onChange} />
      </li>
    </ul>
  );
};

export default ProgrammingLanguages;
