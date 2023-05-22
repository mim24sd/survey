import React, { useContext } from "react";
import ButtonBox from "../../components/ButtonBox/index.jsx";
import styles from "./styles/styles.module.scss";
import SurveyInformation from "../../components/SurveyInformation/index.jsx";

const MainLayout = ({ title, previousPath, nextPath, children }) => {
  const [surveyInfo] = useContext(SurveyInformation);

  let isValid = false;
  let nextButtonType = "primary";
  let nextButtonText = "Next";
  let PreviousButtonType = "primary";
  let PreviousButtonText = "Previous";

  if (nextPath === "/programming-languages") {
    isValid = surveyInfo.personalInformation.isValid;
  } else if (nextPath === "/coding") {
    isValid = surveyInfo.programmingLanguages.isValid;
  } else if (nextPath === "/success") {
    nextButtonType = "success";
    nextButtonText = "Confirm";
  } else if (nextPath === "/") {
    nextButtonText = "Re-do";
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>{title}</h1>
      {children}
      <ButtonBox
        PreviousButtonType={PreviousButtonType}
        PreviousButtonText={PreviousButtonText}
        previousPath={previousPath}
        nextButtonType={nextButtonType}
        nextButtonText={nextButtonText}
        nextPath={nextPath}
        isValid={isValid}
      ></ButtonBox>
    </main>
  );
};

export default MainLayout;
