"use client";

import React, { useEffect, useState } from "react";
import styles from "./Planet.module.scss";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { usePlanetContext } from "@/Context/PlanetContext";
import { Texture, TextureLoader } from "three";

const Planet = () => {
  const { planet } = usePlanetContext();

  const [loading, setLoading] = useState(true);
  const [texture, setTexture] = useState("");

  useEffect(() => {
    const load = () => {
      const texturePath = `/${planet?.texture}`;
      const texture = new TextureLoader().load(texturePath);
      setTexture(texture);
      setLoading(false);
    };

    load();
  }, [planet]);

  return (
    !loading && (
      <div className={styles.canvasContainer}>
        <Canvas>
          <mesh>
            <sphereGeometry args={[2, 40, 40]} />
            <meshBasicMaterial map={texture} />
          </mesh>

          <OrbitControls
            enableRotate={true}
            enableDamping={true}
            minDistance={3.5}
            maxDistance={8}
          />
        </Canvas>
      </div>
    )
  );
};

export default Planet;
