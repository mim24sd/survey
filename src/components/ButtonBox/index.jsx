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
  isFormValid,
}) => {
  let buttonBox = (
    <div className={styles.next_button}>
      <Button type={nextButtonType} path={nextPath} isFormValid={isFormValid}>
        {nextButtonText}
      </Button>
    </div>
  );

  if (previousPath !== undefined) {
    buttonBox = (
      <div className={styles.next_and_prev_button}>
        <Button
          type={PreviousButtonType}
          path={previousPath}
          isFormValid={true}
        >
          {PreviousButtonText}
        </Button>
        <Button type={nextButtonType} path={nextPath} isFormValid={isFormValid}>
          {nextButtonText}
        </Button>
      </div>
    );
  }

  return buttonBox;
};

export default ButtonBox;
