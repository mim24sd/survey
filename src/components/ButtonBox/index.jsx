import React from "react";
import Button from "../Button/index.jsx";
import styles from "./styles/styles.module.scss";

const ButtonBox = ({
  PreviousButtonType,
  PreviousButtonText,
  previousPath,
  nextButtonType,
  nextButtonText,
  nextPath,
}) => {
  let buttonBox = (
    <div className={styles.one_button_box}>
      <Button
        text={nextButtonText}
        type={nextButtonType}
        path={nextPath}
      ></Button>
    </div>
  );

  if (previousPath !== undefined) {
    buttonBox = (
      <div className={styles.two_button_box}>
        <Button
          text={PreviousButtonText}
          type={PreviousButtonType}
          path={previousPath}
        ></Button>
        <Button
          text={nextButtonText}
          type={nextButtonType}
          path={nextPath}
        ></Button>
      </div>
    );
  }

  return buttonBox;
};

export default ButtonBox;
