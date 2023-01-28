import React, { useContext } from "react";
import ButtonBox from "../../components/ButtonBox/index.jsx";
import styles from "./styles/styles.module.scss";
import SurveyInformation from "../../components/SurveyInformation/index.jsx";

const MainLayout = ({ title, previousPath, nextPath, children }) => {
  const [surveyInfo] = useContext(SurveyInformation);
  let isFormValid = false;
  let nextButtonType = "primary";
  let nextButtonText = "Next";
  let PreviousButtonType = "primary";
  let PreviousButtonText = "Previous";

  if (nextPath === "/programming-languages") {
    isFormValid = surveyInfo.personalInformation.isFormValid;
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
        isFormValid={isFormValid}
      ></ButtonBox>
    </main>
  );
};

export default MainLayout;
