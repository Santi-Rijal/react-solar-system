import Planet from "@/components/Planet/Planet";
import styles from "./page.module.scss";
import React from "react";
import PlanetInfo from "@/components/PlanetInfo/PlanetInfo";

const PlanetContainer = () => {
  return (
    <div className={styles.container}>
      <PlanetInfo />
      <Planet />
    </div>
  );
};

export default PlanetContainer;
