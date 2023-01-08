import React from "react";
import Button from "../Button/index.jsx";
import styles from "./styles/styles.module.scss";

const ButtonBox = ({ title }) => {
  let buttonBox = (
    <div className={styles.one_button_box}>
      <Button text="Next" path="/programming_languages" type="primary"></Button>
    </div>
  );

  if (title === "Programming languages") {
    buttonBox = (
      <div className={styles.two_button_box}>
        <Button text="Previous" path="/" type="primary"></Button>
        <Button text="Next" path="/coding" type="primary"></Button>
      </div>
    );
  } else if (title === "Coding") {
    buttonBox = (
      <div className={styles.two_button_box}>
        <Button
          text="Previous"
          path="/programming_languages"
          type="primary"
        ></Button>
        <Button text="Next" path="/social_media" type="primary"></Button>
      </div>
    );
  } else if (title === "Social Media") {
    buttonBox = (
      <div className={styles.two_button_box}>
        <Button text="Previous" path="/coding" type="primary"></Button>
        <Button text="Next" path="/comment" type="primary"></Button>
      </div>
    );
  } else if (title === "Comment") {
    buttonBox = (
      <div className={styles.two_button_box}>
        <Button text="Previous" path="/social_media" type="primary"></Button>
        <Button text="Next" path="/occupation" type="primary"></Button>
      </div>
    );
  } else if (title === "Occupation") {
    buttonBox = (
      <div className={styles.two_button_box}>
        <Button text="Previous" path="/comment" type="primary"></Button>
        <Button text="Next" path="/contant_information" type="primary"></Button>
      </div>
    );
  } else if (title === "Contant Information") {
    buttonBox = (
      <div className={styles.two_button_box}>
        <Button text="Previous" path="/occupation" type="primary"></Button>
        <Button text="Next" path="/confirm_information" type="primary"></Button>
      </div>
    );
  } else if (title === "Confirm Information") {
    buttonBox = (
      <div className={styles.two_button_box}>
        <Button
          text="Previous"
          path="/contant_information"
          type="primary"
        ></Button>
        <Button text="Confirm" path="/success" type="success"></Button>
      </div>
    );
  } else if (title === "Success") {
    buttonBox = (
      <div className={styles.one_button_box}>
        <Button text="Re-do" path="/"></Button>
      </div>
    );
  }

  return buttonBox;
};

export default ButtonBox;
