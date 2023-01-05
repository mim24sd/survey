import React from "react";
import Button from "../Button/index.jsx";
import styles from "./styles/styles.module.scss";

const ButtonBox = ({ title }) => {
  let buttonBox = (
    <div className={styles.oneButtonBox}>
      <Button title="Next" path="/programminglanguages"></Button>
    </div>
  );

  if (title === "Programming languages") {
    buttonBox = (
      <div className={styles.twoButtonBox}>
        <Button title="Previous" path="/"></Button>
        <Button title="Next" path="/coding"></Button>
      </div>
    );
  } else if (title === "Coding") {
    buttonBox = (
      <div className={styles.twoButtonBox}>
        <Button title="Previous" path="/programminglanguages"></Button>
        <Button title="Next" path="/socialMedia"></Button>
      </div>
    );
  } else if (title === "Social Media") {
    buttonBox = (
      <div className={styles.twoButtonBox}>
        <Button title="Previous" path="/coding"></Button>
        <Button title="Next" path="/comment"></Button>
      </div>
    );
  } else if (title === "Comment") {
    buttonBox = (
      <div className={styles.twoButtonBox}>
        <Button title="Previous" path="/socialMedia"></Button>
        <Button title="Next" path="/occupation"></Button>
      </div>
    );
  } else if (title === "Occupation") {
    buttonBox = (
      <div className={styles.twoButtonBox}>
        <Button title="Previous" path="/comment"></Button>
        <Button title="Next" path="/contantInformation"></Button>
      </div>
    );
  } else if (title === "Contant Information") {
    buttonBox = (
      <div className={styles.twoButtonBox}>
        <Button title="Previous" path="/occupation"></Button>
        <Button title="Next" path="/confirmInformation"></Button>
      </div>
    );
  } else if (title === "Confirm Information") {
    buttonBox = (
      <div className={styles.twoButtonBox}>
        <Button title="Previous" path="/contantInformation"></Button>
        <Button title="Confirm" path="/success"></Button>
      </div>
    );
  } else if (title === "Success") {
    buttonBox = (
      <div className={styles.oneButtonBox}>
        <Button title="Re-do" path="/"></Button>
      </div>
    );
  }

  return buttonBox;
};

export default ButtonBox;
