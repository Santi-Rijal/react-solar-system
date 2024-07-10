import { PiPlusMinus } from "react-icons/pi";

const data = [
  {
    id: 0,
    planet: "Earth",
    texture: "earth_texture.png",
    funFact:
      "Earth – our home planet – is the third planet from the Sun, and the fifth largest planet. It's the only place we know of inhabited by living things.",
    age: `4.54 billion years, ${(<PiPlusMinus />)} 50 million years`,
    namesake:
      "The name Earth is a Germanic word, which simply means “the ground.”",
    values: {
      mass: "5.9722 · 10^24 kg",
      volume: "108.321 · 10^10 km^3",
      meanDensity: "5513 kg/m^3",
      surfaceGravity: "9.820 m/s^2",
    },
    atmosphere: {
      surfacePressure: "1014 mb",
      surfaceDensity: "1.217 kg/m^3",
      averageTemperature: {
        kelvin: "288",
        celsius: "15",
        fahrenheit: "59",
      },
      windSpeeds: "0 to 100 m/s",
      atmosphericComposition: {
        nitrogen: 78,
        oxygen: 21,
        otherGases: 1,
      },
      moons: {
        amount: 1,
        names: ["Moon"],
      },
      rings: "None",
      time: {
        lengthOfDay: "~24 h",
        lengthOfYear: "~365 days",
      },
      water: "70% of the surface",
    },
  },
  {
    id: 1,
    planet: "Mars",
    texture: "mars_texture.png",
    funFact:
      "Mars – the fourth planet from the Sun – it is frequently called the 'Red Planet' because iron minerals in the Martian dirt oxidize, or rust, causing the surface to look red.",
    age: `4.603 billion years`,
    namesake:
      "Mars was named by the ancient Romans for their god of war because its reddish color was reminiscent of blood.",
    values: {
      mass: "0.64169 · 10^24 kg",
      volume: "16.312 · 10^10 km^3",
      meanDensity: "3934 kg/m^3",
      surfaceGravity: "3.73 m/s^2",
    },
    atmosphere: {
      surfacePressure: `6.36 mb ${(
        <PiPlusMinus />
      )} 4.0 to 8.7 mb depending on season`,
      surfaceDensity: "~0.020 kg/m^3",
      averageTemperature: {
        kelvin: "184 to 242",
        celsius: "-89 to -31",
        fahrenheit: "-128.47 to -24.07",
      },
      windSpeeds: "2-7 m/s (summer), 5-10 m/s (fall), 17-30 m/s (dust storm)",
      majorAtmosphericComposition: {
        carbonDioxide: 95,
        nitrogen: 2.6,
        argon: 2,
        otherGases: 0.4,
      },
      moons: {
        amount: 2,
        names: ["Phobos", "Deimos"],
      },
      rings: "None",
    },
    time: {
      lengthOfDay: "24.6 h",
      lengthOfYear: "669.6 sols (solar day)",
    },
    water: "Underground in form of water-ice in the polar regions",
  },
  {
    id: 2,
    planet: "Venus",
    texture: "venus_texture.png",
    funFact:
      "Venus – the second planet from the Sun – it's the hottest planet in our solar system, and is sometimes called Earth's twin.",
    age: `4.6 billion years`,
    namesake: "Venus is named for the ancient Roman goddess of love and beauty",
    values: {
      mass: "4.8673 · 10^24 kg",
      volume: "92.843 · 10^10 km^3",
      meanDensity: "5243 kg/m^3",
      surfaceGravity: "8.87 m/s^2",
    },
    atmosphere: {
      surfacePressure: "92 b",
      surfaceDensity: "~65 kg/m^3",
      averageTemperature: {
        kelvin: "737",
        celsius: "464",
        fahrenheit: "867",
      },
      windSpeeds: "0.3 to 1.0 m/s",
      majorAtmosphericComposition: {
        carbonDioxide: 96.5,
        nitrogen: 3.5,
      },
      moons: {
        amount: 0,
        names: [],
      },
      rings: "None",
    },
    time: {
      lengthOfDay: "243 Earth days",
      lengthOfYear: " 225 Earth days",
    },
    water: "None",
  },
  {
    id: 3,
    planet: "Jupiter",
    texture: "jupiter_texture.png",
    funFact:
      "Jupiter – the fifth planet from the Sun – it's the largest in the solar system",
    age: `4.5 billion years`,
    namesake: "Jupiter, gets its name from the king of the ancient Roman gods",
    values: {
      mass: "1,898.13 · 10^24 kg",
      volume: "143,128 · 10^10 km^3",
      meanDensity: "1,326 kg/m^3",
      surfaceGravity: "25.92 m/s^2",
    },
    atmosphere: {
      surfacePressure: " >> 1000 b",
      surfaceDensity: "At 1b, 0.16 kg/m^3",
      averageTemperature: {
        kelvin: "At 1b, 165",
        celsius: "At 1b, -108",
        fahrenheit: "At 1b, -162.67",
      },
      windSpeeds:
        "Up to 150 m/s (<30 degrees latitude) and up to 40 m/s (>30 degrees latitude)",
      majorAtmosphericComposition: {
        molecularHydrogen: 90,
        helium: 10,
      },
      moons: {
        amount: 95,
        names: ["Io", "Europa", "Ganymede", "Callisto"],
      },
      rings: "Yes",
    },
    time: {
      lengthOfDay: "10 h",
      lengthOfYear: " 12 Earth years",
    },
    water: "None",
  },
  {
    id: 4,
    planet: "Neptune",
    texture: "neptune_texture.png",
    funFact:
      "Jupiter – the fifth eighth from the Sun – it’s the fourth-largest, and the first planet discovered with math.",
    age: `4.503 billion years`,
    namesake: "Jupiter, gets its name from the king of the ancient Roman gods",
    values: {
      mass: "102.409 · 10^24 kg",
      volume: "6,254 · 10^10 km^3",
      meanDensity: "1,638 kg/m^3",
      surfaceGravity: "11.27 m/s^2",
    },
    atmosphere: {
      surfacePressure: " >> 1000 b",
      surfaceDensity: "At 1b, 0.45 kg/m^3",
      averageTemperature: {
        kelvin: "At 1b, 72",
        celsius: "At 1b, -201",
        fahrenheit: "At 1b, -330.07",
      },
      windSpeeds: "0-580 m/s",
      majorAtmosphericComposition: {
        molecularHydrogen: 80,
        helium: 19,
        methane: 1,
      },
      moons: {
        amount: 16,
        names: ["Triton", "Nereid", "Proteus", "Larissa"],
      },
      rings: "6",
    },
    time: {
      lengthOfDay: "16 h",
      lengthOfYear: " 165 Earth years",
    },
    water: "Ice giant",
  },
  {
    id: 5,
    planet: "Mercury",
    texture: "mercury_texture.png",
    funFact:
      "Mercury - the closest planet to the Sun - the smallest planet in our solar system.",
    age: `4.503 billion years`,
    namesake:
      "Mercury is appropriately named for the swiftest of the ancient Roman gods.",
    values: {
      mass: "0.33010 · 10^24 kg",
      volume: "6.083 · 10^10 km^3",
      meanDensity: "5429 kg/m^3",
      surfaceGravity: "3.70 m/s^2",
    },
    atmosphere: {
      surfacePressure: "<~5 x 10^-15 b",
      surfaceDensity: "At 1b, 0.45 kg/m^3",
      averageTemperature: {
        kelvin: "440, 590-725 sunward side",
        celsius: "167, 166.85-451.85 sunward side",
        fahrenheit: "332.33, 602.33-845.33 sunward side",
      },
      windSpeeds: "0 m/s",
      majorAtmosphericComposition: {},
      moons: {
        amount: 0,
        names: [],
      },
      rings: "None",
    },
    time: {
      lengthOfDay: "176 Earth days",
      lengthOfYear: " 88 Earth days",
    },
    water: "None",
  },
  {
    id: 6,
    planet: "Uranus",
    texture: "uranus_texture.png",
    funFact:
      "Uranus – the seventh planet from the Sun – it appears to spin sideways.",
    age: `4.503 billion years`,
    namesake: "Uranus, the Greek god of the sky",
    values: {
      mass: "86.811 · 10^24 kg",
      volume: "6,833 · 10^10 km^3",
      meanDensity: "1,270 kg/m^3",
      surfaceGravity: "9.01 m/s^2",
    },
    atmosphere: {
      surfacePressure: ">>1000 b",
      surfaceDensity: "At 1b, 0.42 kg/m^3",
      averageTemperature: {
        kelvin: "At 1b, 76",
        celsius: "At 1b, -197",
        fahrenheit: "At 1b, -322.87",
      },
      windSpeeds: "0-250 m/s",
      majorAtmosphericComposition: {
        molecularHydrogen: 82.5,
        helium: 15.2,
        methane: 2.3,
      },
      moons: {
        amount: 28,
        names: [],
      },
      rings: "2",
    },
    time: {
      lengthOfDay: "17 h",
      lengthOfYear: " 84 Earth years",
    },
    water: "Ice giant",
  },
  {
    id: 7,
    planet: "Saturn",
    texture: "saturn_texture.png",
    funFact:
      "Jupiter – the sixth planet from the Sun – it’s the second-largest. It’s surrounded by beautiful rings.",
    age: `4.503 billion years`,
    namesake:
      "Saturn, named after the Roman god of agriculture and wealth, who was also the father of Jupiter",
    values: {
      mass: "568.32 · 10^24 kg",
      volume: "82,713 · 10^10 km^3",
      meanDensity: "687 kg/m^3",
      surfaceGravity: "11.19 m/s^2",
    },
    atmosphere: {
      surfacePressure: ">> 1000 b",
      surfaceDensity: "At 1b, 0.19 kg/m^3",
      averageTemperature: {
        kelvin: "At 1b, 134",
        celsius: "At 1b, -139",
        fahrenheit: "At 1b, -218.47",
      },
      windSpeeds:
        "Up to 400 m/s (<30 degrees latitude) and up to 150 m/s (>30 degrees latitude)",
      majorAtmosphericComposition: {
        molecularHydrogen: 96.75,
        helium: 3.25,
      },
      moons: {
        amount: 146,
        names: ["Titan", "Enceladus", "Hyperion", "Prometheus"],
      },
      rings: "9",
    },
    time: {
      lengthOfDay: "10.7 h",
      lengthOfYear: " 29.4 Earth years",
    },
    water: "Gas giant",
  },
];

export default data;
