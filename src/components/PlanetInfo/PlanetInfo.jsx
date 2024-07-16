"use client";

import { usePlanetContext } from "@/Context/PlanetContext";
import styles from "./planetInfo.module.scss";
import React from "react";

const PlanetInfo = () => {
  const { planet } = usePlanetContext();

  return (
    <div className={styles.container}>
      <section>
        {/* <h1 className={styles.planet}>{planet?.planet}</h1>
        <h3 className={styles.planet}>{planet?.funFact}</h3> */}
      </section>
    </div>
  );
};

export default PlanetInfo;
