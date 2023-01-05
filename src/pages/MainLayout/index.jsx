import React from "react";
import ButtonBox from "../../components/ButtonBox/index.jsx";
import styles from "./styles/styles.module.scss";

const MainLayout = ({ title }) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>{title}</h1>
      <ButtonBox title={title}></ButtonBox>
    </main>
  );
};

export default MainLayout;
