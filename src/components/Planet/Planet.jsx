"use client";

import React, { useEffect, useState } from "react";
import styles from "./Planet.module.scss";
import data from "@/data/data";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import { usePlanetContext } from "@/Context/PlanetContext";

const Planet = () => {
  const { planet } = usePlanetContext();

  const planetTexture = useLoader(TextureLoader, planet?.texture);

  console.log(planetTexture);

  return (
    <div className={styles.canvasContainer}>
      <h1 className={styles.planetName}>{planet?.planet}</h1>
      <Canvas>
        <mesh>
          <sphereGeometry args={[2, 40, 40]} />
          <meshBasicMaterial map={planetTexture} />
        </mesh>

        <OrbitControls
          enableRotate={true}
          enableDamping={true}
          minDistance={3.5}
          maxDistance={8}
        />
      </Canvas>
    </div>
  );
};

export default Planet;
