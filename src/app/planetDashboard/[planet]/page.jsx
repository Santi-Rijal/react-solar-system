import Planet from "@/components/Planet/Planet";
import styles from "./page.module.scss";
import React from "react";

const PlanetContainer = () => {
  return (
    <div className={styles.container}>
      <Planet />
    </div>
  );
};

export default PlanetContainer;
