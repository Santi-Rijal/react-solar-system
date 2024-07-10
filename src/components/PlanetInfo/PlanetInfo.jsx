"use client";

import { usePlanetContext } from "@/Context/PlanetContext";
import styles from "./planetInfo.module.scss";
import React from "react";

const PlanetInfo = () => {
  const { planet } = usePlanetContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.planet}>{planet?.planet}</h1>
    </div>
  );
};

export default PlanetInfo;
