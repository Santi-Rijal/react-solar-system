"use client";

import React, { useEffect, useState } from "react";
import styles from "./Planet.module.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { usePlanetContext } from "@/Context/PlanetContext";
import { TextureLoader } from "three";

const Planet = () => {
  const { planet } = usePlanetContext();

  const [loading, setLoading] = useState(true);
  const [texture, setTexture] = useState("");
  const [ringTexture, setRingTexture] = useState(null);

  useEffect(() => {
    const load = () => {
      const texturePath = `/${planet?.texture}`;
      const texture = new TextureLoader().load(texturePath);

      if (planet?.rings?.num !== 0 && planet?.rings?.hasTexture) {
        const path = `/${planet?.planet.toLowerCase()}_rings_texture.png`;
        const ringTexture = new TextureLoader().load(path);
        ringTexture.rotation = Math.PI / 2;

        setRingTexture(ringTexture);
      }
      setTexture(texture);
      setLoading(false);
    };

    load();
  }, [planet]);

  return (
    !loading && (
      <div className={styles.canvasContainer}>
        <Canvas>
          <PerspectiveCamera makeDefault fov={70} position={[0, 5, 10]} />
          <mesh>
            <sphereGeometry args={[2, 40, 40]} />
            <meshBasicMaterial map={texture} />
          </mesh>

          <OrbitControls
            enableRotate={true}
            enableDamping={true}
            autoRotate={true}
            minDistance={3.5}
            maxDistance={8}
          />

          {ringTexture !== null && (
            <mesh rotation-x={Math.PI / 2}>
              <torusGeometry args={[4, 1.5, 2.2, 100]} />
              <meshBasicMaterial map={ringTexture} />
            </mesh>
          )}
        </Canvas>
      </div>
    )
  );
};

export default Planet;
