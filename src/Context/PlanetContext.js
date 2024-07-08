"use client";

import data from "@/data/data";
import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const PlanetContext = ({ children }) => {
  const [planet, setPlanet] = useState(null);
  const [name, setName] = useState("");

  const planets = data;

  const nameChange = (name) => {
    setName(name);
  };

  useEffect(() => {
    const planetChange = () => {
      const planet = planets?.find(
        (item) => item?.planet.toLowerCase() === name.toLowerCase()
      );

      setPlanet(planet);
    };

    planetChange();
  }, [name]);

  return (
    <Context.Provider value={{ planet, nameChange }}>
      {children}
    </Context.Provider>
  );
};

export const usePlanetContext = () => useContext(Context);
