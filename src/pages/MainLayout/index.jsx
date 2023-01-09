import React from "react";
import ButtonBox from "../../components/ButtonBox/index.jsx";
import styles from "./styles/styles.module.scss";

const MainLayout = ({ title, previousPath, nextPath }) => {
  let nextButtonType = "primary";
  let nextButtonText = "Next";
  let PreviousButtonType = "primary";
  let PreviousButtonText = "Previous";

  if (nextPath === "/success") {
    nextButtonType = "success";
    nextButtonText = "Confirm";
  } else if (nextPath === "/") {
    nextButtonText = "Re-do";
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>{title}</h1>
      <ButtonBox
        PreviousButtonType={PreviousButtonType}
        PreviousButtonText={PreviousButtonText}
        previousPath={previousPath}
        nextButtonType={nextButtonType}
        nextButtonText={nextButtonText}
        nextPath={nextPath}
      ></ButtonBox>
    </main>
  );
};

export default MainLayout;
