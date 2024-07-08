"use client";

import { usePlanetContext } from "@/Context/PlanetContext";
import Link from "next/link";
import React from "react";

const nav = [
  "Venus",
  "Mercury",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

const PlanetDashboard = () => {
  const { nameChange } = usePlanetContext();

  return (
    <div>
      {nav.map((navItem) => (
        <Link
          href={`planetDashboard/${navItem}`}
          onClick={() => nameChange(navItem)}
        >
          {navItem}
        </Link>
      ))}
    </div>
  );
};

export default PlanetDashboard;
