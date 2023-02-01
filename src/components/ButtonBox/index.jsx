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
  isValid,
}) => {
  const isEnabled = isValid;
  let nextValidatedPath = isEnabled ? nextPath : null;
  let wrapperStyle = previousPath
    ? styles.next_and_prev_button
    : styles.next_button;

  return (
    <div className={wrapperStyle}>
      {previousPath && (
        <Button type={PreviousButtonType} path={previousPath} isEnabled={true}>
          {PreviousButtonText}
        </Button>
      )}
      <Button
        type={nextButtonType}
        path={nextValidatedPath}
        isEnabled={isEnabled}
      >
        {nextButtonText}
      </Button>
    </div>
  );
};

export default ButtonBox;
