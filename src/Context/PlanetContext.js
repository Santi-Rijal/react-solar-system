"use client";

import data from "@/data/data";
import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const PlanetContext = ({ children }) => {
  const loadFromStorage = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const savedPlanet = window.localStorage.getItem("planet");
      return savedPlanet ? JSON.parse(savedPlanet) : null;
    }
    return null;
  };

  const [planet, setPlanet] = useState(loadFromStorage);

  const planets = data;

  const saveToStorage = (planet) => {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem("planet", JSON.stringify(planet));
    }
  };

  const planetChange = (name) => {
    const planet = planets?.find(
      (item) => item?.planet.toLowerCase() === name.toLowerCase()
    );

    setPlanet(planet);
    saveToStorage(planet);
  };

  const nameChange = (name) => {
    planetChange(name);
  };

  return (
    <Context.Provider value={{ planet, nameChange }}>
      {children}
    </Context.Provider>
  );
};

export const usePlanetContext = () => useContext(Context);
