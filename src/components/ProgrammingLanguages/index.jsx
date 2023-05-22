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
    const languages = programmingLanguageList(isChecked, language);
    setProgrammingLanguages(languages, languages.length);
  }

  function programmingLanguageList(isChecked, language) {
    let languages = surveyInfo.programmingLanguages.languages;

    if (isChecked) {
      languages.push(language);
    } else {
      languages = languages.filter((eachLanguage) => eachLanguage !== language);
    }

    return languages;
  }

  function setProgrammingLanguages(languages, isValid) {
    setSurveyInfo((prevUser) => ({
      ...prevUser,
      programmingLanguages: {
        languages: languages,
        isValid: isValid,
      },
    }));

    console.log(surveyInfo);
  }
  return (
    <ul className={styles.list}>
      <li>
        <Checkbox
          question={question}
          options={languages}
          required={true}
          onChange={onChange}
        />
      </li>
    </ul>
  );
};

export default ProgrammingLanguages;
