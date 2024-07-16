"use client";

import { usePlanetContext } from "@/Context/PlanetContext";
import styles from "./planetInfo.module.scss";
import React, { useState } from "react";

const PlanetInfo = () => {
  const { planet } = usePlanetContext();
  const [tempUnit, setTempUnit] = useState("kelvin");

  const camelToSpace = (key) =>
    key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, key[0].toUpperCase());

  return (
    <div className={styles.container}>
      <section>
        <h1 className={styles.planet}>{planet?.planet}</h1>
        <h3 className={styles.planet}>{planet?.funFact}</h3>
      </section>

      <section>
        <p className={styles.planet}>{planet?.namesake}</p>
        <p className={styles.planet}>{planet?.age}</p>
      </section>

      <div>
        <p>Water</p>
        <p>{planet?.water}</p>
      </div>

      <ul>
        {Object.entries(planet?.values).map(([key, value]) => {
          return (
            <div>
              <li>{camelToSpace(key)}</li>
              <li>{value}</li>
            </div>
          );
        })}
      </ul>

      <ul>
        <li>Atmosphere</li>

        <div>
          <div>
            <p>Surface Pressur</p>
            <p>{planet?.atmosphere?.surfacePressure}</p>
          </div>
          <div>
            <p>Surface Density</p>
            <p>{planet?.atmosphere?.surfaceDensity}</p>
          </div>
          <div>
            <p>Winds</p>
            <p>{planet?.atmosphere?.windSpeeds}</p>
          </div>
        </div>

        <div>
          <p>Average Temperature</p>

          <div>
            <div>
              <span onClick={() => setTempUnit("kelvin")}>K</span>
              <span onClick={() => setTempUnit("celsius")}>C</span>
              <span onClick={() => setTempUnit("fahrenheit")}>F</span>
            </div>

            <p>
              {planet?.atmosphere?.averageTemperature?.[tempUnit]}{" "}
              {camelToSpace(tempUnit)}
            </p>
          </div>
        </div>

        <div>
          <p>Atmosphere Composition</p>

          {Object.entries(planet?.atmosphere?.majorAtmosphericComposition).map(
            ([key, value]) => {
              return (
                <div>
                  <p>{camelToSpace(key)}</p>
                  <p>{value}</p>
                </div>
              );
            }
          )}
        </div>
      </ul>

      <div>
        <p>Moons</p>

        <div>
          <span>{planet?.moons?.amount}</span>

          <div>
            <p>Main moons</p>
            <p>{planet?.moons?.names}</p>
          </div>
        </div>
      </div>

      <div>
        <p>Rings</p>

        <span>{planet?.rings?.num}</span>
      </div>

      <ul>
        <p>Time</p>

        {Object.entries(planet?.time).map(([key, value]) => {
          return (
            <div>
              <li>{camelToSpace(key)}</li>
              <li>{value}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default PlanetInfo;
