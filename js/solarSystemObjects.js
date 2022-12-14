/* eslint-disable quotes */
const ORBITCOLOR = {
	'MERCURY':'rgba(200,150,100,0.2)',  //mercury
	'VENUS':'rgba(153, 153, 100, 0.2)', //venus
	'EARTH':'rgba(0, 153, 255, 0.2)', //earth
	'MARS':'rgba(255, 150, 130, 0.2)', //mars
	'JUPITER':'rgba(255, 165, 0, 0.2)', //Jupiter
	'SATURN':'rgba(250, 250, 250, 0.2)', //Saturn
	'URANUS':'rgba(102, 178, 255, 0.2)', //Uranus
	'NEPTUNE':'rgba(0, 0, 255, 0.2)', //Neptune
	'PLUTO':'rgba(150, 150, 150, 0.2)' //Pluto no image
};

// eslint-disable-next-line no-unused-vars
const SOLARSYSTEMOBJECTS = {
	"SUN": {
		"Mass_kg": "1.9890000000000002e+30",
		"Diameter_km": "1.3927e+6",
		"planets": [
			"MERCURY",
			"VENUS",
			"EARTH",
			"MARS",
			"JUPITER",
			"SATURN",
			"URANUS",
			"NEPTUNE",
			"PLUTO"
		],
		"name": "SUN",
		"orbitColor": ORBITCOLOR['SUN']
	},
	"MOON": {
		"Mass_kg": "7.3476e+22",
		"Diameter_km": "3.4748e+3",
		"Density_kg_m3": "3340",
		"Gravity_m_s2": "1.6",
		"EscapeVelocity_km_s": "2.4",
		"RotationPeriod_hours": "655.7",
		"LengthofDay_hours": "708.7",
		"DistancefromEarth": "3.844e+5",
		"perihelion_km": "3.63e+5",
		"aphelion_km": "4.06e+5",
		"OrbitalPeriod_days": "27.3*",
		"OrbitalVelocity_km_s": "1.0*",
		"OrbitalInclination_degrees": "5.1",
		"OrbitalEccentricity": "0.055",
		"ObliquitytoOrbit_degrees": "6.7",
		"MeanTemperature_C": "-20",
		"SurfacePressure_bars": "0",
		"NumberofMoons": "0",
		"RingSystem?": "No",
		"GlobalMagneticField?": "No",
		"name": "MOON",
		"orbitColor": ORBITCOLOR['MOON']
	},
	"MERCURY": {
		"Mass_kg": "3.3e+23",
		"Diameter_km": "4.879e+3",
		"Density_kg_m3": "5427",
		"Gravity_m_s2": "3.7",
		"EscapeVelocity_km_s": "4.3",
		"RotationPeriod_hours": "1407.6",
		"LengthofDay_hours": "4222.6",
		"DistancefromSun_km": "5.79e+7",
		"perihelion_km": "4.6e+7",
		"aphelion_km": "6.98e+7",
		"OrbitalPeriod_days": "88.0",
		"OrbitalVelocity_km_s": "47.4",
		"OrbitalInclination_degrees": "7.0",
		"OrbitalEccentricity": "0.205",
		"ObliquitytoOrbit_degrees": "0.034",
		"MeanTemperature_C": "167",
		"SurfacePressure_bars": "0",
		"NumberofMoons": "0",
		"RingSystem?": "No",
		"GlobalMagneticField?": "Yes",
		"PlanetNumber": 1,
		"name": "MERCURY",
		"orbitColor": ORBITCOLOR['MERCURY']
	},
	"VENUS": {
		"Mass_kg": "4.87e+24",
		"Diameter_km": "1.2104e+4",
		"Density_kg_m3": "5243",
		"Gravity_m_s2": "8.9",
		"EscapeVelocity_km_s": "10.4",
		"RotationPeriod_hours": "-5832.5",
		"LengthofDay_hours": "2802.0",
		"DistancefromSun_km": "1.082e+8",
		"perihelion_km": "1.075e+8",
		"aphelion_km": "1.089e+8",
		"OrbitalPeriod_days": "224.7",
		"OrbitalVelocity_km_s": "35.0",
		"OrbitalInclination_degrees": "3.4",
		"OrbitalEccentricity": "0.007",
		"ObliquitytoOrbit_degrees": "177.4",
		"MeanTemperature_C": "464",
		"SurfacePressure_bars": "92",
		"NumberofMoons": "0",
		"RingSystem?": "No",
		"GlobalMagneticField?": "No",
		"PlanetNumber": 2,
		"name": "VENUS",
		"orbitColor": ORBITCOLOR['VENUS']
	},
	"EARTH": {
		"Mass_kg": "5.97219e+24",
		"Diameter_km": "1.2756e+4",
		"Density_kg_m3": "5514",
		"Gravity_m_s2": "9.8",
		"EscapeVelocity_km_s": "11.2",
		"RotationPeriod_hours": "23.9",
		"LengthofDay_hours": "24.0",
		"DistancefromSun_km": "1.496e+8",
		"perihelion_km": "1.471e+8",
		"aphelion_km": "1.521e+8",
		"OrbitalPeriod_days": "365.2",
		"OrbitalVelocity_km_s": "29.8",
		"OrbitalInclination_degrees": "0.0",
		"OrbitalEccentricity": "0.017",
		"ObliquitytoOrbit_degrees": "23.4",
		"MeanTemperature_C": "15",
		"SurfacePressure_bars": "1",
		"NumberofMoons": "1",
		"RingSystem?": "No",
		"GlobalMagneticField?": "Yes",
		"PlanetNumber": 3,
		"Color": "rgba(0, 153, 255, 0.2)",
		"name": "EARTH",
		"orbitColor": ORBITCOLOR['EARTH']
	},
	"MARS": {
		"Mass_kg": "6.42e+23",
		"Diameter_km": "6.792e+3",
		"Density_kg_m3": "3933",
		"Gravity_m_s2": "3.7",
		"EscapeVelocity_km_s": "5.0",
		"RotationPeriod_hours": "24.6",
		"LengthofDay_hours": "24.7",
		"DistancefromSun_km": "2.279e+8",
		"perihelion_km": "2.066e+8",
		"aphelion_km": "2.492e+8",
		"OrbitalPeriod_days": "687.0",
		"OrbitalVelocity_km_s": "24.1",
		"OrbitalInclination_degrees": "1.9",
		"OrbitalEccentricity": "0.094",
		"ObliquitytoOrbit_degrees": "25.2",
		"MeanTemperature_C": "-65",
		"SurfacePressure_bars": "0.01",
		"NumberofMoons": "2",
		"RingSystem?": "No",
		"GlobalMagneticField?": "No",
		"PlanetNumber": 4,
		"name": "MARS",
		"orbitColor": ORBITCOLOR['MARS']
	},
	"JUPITER": {
		"Mass_kg": "1.898e+27",
		"Diameter_km": "1.42984e+5",
		"Density_kg_m3": "1326",
		"Gravity_m_s2": "23.1",
		"EscapeVelocity_km_s": "59.5",
		"RotationPeriod_hours": "9.9",
		"LengthofDay_hours": "9.9",
		"DistancefromSun_km": "7.786e+8",
		"perihelion_km": "7.405e+8",
		"aphelion_km": "8.166e+8",
		"OrbitalPeriod_days": "4331",
		"OrbitalVelocity_km_s": "13.1",
		"OrbitalInclination_degrees": "1.3",
		"OrbitalEccentricity": "0.049",
		"ObliquitytoOrbit_degrees": "3.1",
		"MeanTemperature_C": "-110",
		"SurfacePressure_bars": "Unknown*",
		"NumberofMoons": "79",
		"RingSystem?": "Yes",
		"GlobalMagneticField?": "Yes",
		"PlanetNumber": 5,
		"name": "JUPITER",
		"orbitColor": ORBITCOLOR['JUPITER']
	},
	"SATURN": {
		"Mass_kg": "5.68e+26",
		"Diameter_km": "1.20536e+5",
		"Density_kg_m3": "687",
		"Gravity_m_s2": "9.0",
		"EscapeVelocity_km_s": "35.5",
		"RotationPeriod_hours": "10.7",
		"LengthofDay_hours": "10.7",
		"DistancefromSun_km": "1.4335e+9",
		"perihelion_km": "1.3526e+9",
		"aphelion_km": "1.5145e+9",
		"OrbitalPeriod_days": "10,747",
		"OrbitalVelocity_km_s": "9.7",
		"OrbitalInclination_degrees": "2.5",
		"OrbitalEccentricity": "0.057",
		"ObliquitytoOrbit_degrees": "26.7",
		"MeanTemperature_C": "-140",
		"SurfacePressure_bars": "Unknown*",
		"NumberofMoons": "82",
		"RingSystem?": "Yes",
		"GlobalMagneticField?": "Yes",
		"PlanetNumber": 6,
		"name": "SATURN",
		"orbitColor": ORBITCOLOR['SATURN']
	},
	"URANUS": {
		"Mass_kg": "8.68e+25",
		"Diameter_km": "5.1118e+4",
		"Density_kg_m3": "1271",
		"Gravity_m_s2": "8.7",
		"EscapeVelocity_km_s": "21.3",
		"RotationPeriod_hours": "-17.2",
		"LengthofDay_hours": "17.2",
		"DistancefromSun_km": "2.8725e+9",
		"perihelion_km": "2.7413e+9",
		"aphelion_km": "3.0036e+9",
		"OrbitalPeriod_days": "30,589",
		"OrbitalVelocity_km_s": "6.8",
		"OrbitalInclination_degrees": "0.8",
		"OrbitalEccentricity": "0.046",
		"ObliquitytoOrbit_degrees": "97.8",
		"MeanTemperature_C": "-195",
		"SurfacePressure_bars": "Unknown*",
		"NumberofMoons": "27",
		"RingSystem?": "Yes",
		"GlobalMagneticField?": "Yes",
		"PlanetNumber": 7,
		"name": "URANUS",
		"orbitColor": ORBITCOLOR['URANUS']
	},
	"NEPTUNE": {
		"Mass_kg": "1.0199999999999999e+26",
		"Diameter_km": "4.9528e+4",
		"Density_kg_m3": "1638",
		"Gravity_m_s2": "11.0",
		"EscapeVelocity_km_s": "23.5",
		"RotationPeriod_hours": "16.1",
		"LengthofDay_hours": "16.1",
		"DistancefromSun_km": "4.4951e+9",
		"perihelion_km": "4.4445e+9",
		"aphelion_km": "4.5457e+9",
		"OrbitalPeriod_days": "59,800",
		"OrbitalVelocity_km_s": "5.4",
		"OrbitalInclination_degrees": "1.8",
		"OrbitalEccentricity": "0.011",
		"ObliquitytoOrbit_degrees": "28.3",
		"MeanTemperature_C": "-200",
		"SurfacePressure_bars": "Unknown*",
		"NumberofMoons": "14",
		"RingSystem?": "Yes",
		"GlobalMagneticField?": "Yes",
		"PlanetNumber": 8,
		"name": "NEPTUNE",
		"orbitColor": ORBITCOLOR['NEPTUNE']
	},
	"PLUTO": {
		"Mass_kg": "1.46e+22",
		"Diameter_km": "2.37e+3",
		"Density_kg_m3": "2095",
		"Gravity_m_s2": "0.7",
		"EscapeVelocity_km_s": "1.3",
		"RotationPeriod_hours": "-153.3",
		"LengthofDay_hours": "153.3",
		"DistancefromSun_km": "5.9064e+9",
		"perihelion_km": "4.4368e+9",
		"aphelion_km": "7.3759e+9",
		"OrbitalPeriod_days": "90,560",
		"OrbitalVelocity_km_s": "4.7",
		"OrbitalInclination_degrees": "17.2",
		"OrbitalEccentricity": "0.244",
		"ObliquitytoOrbit_degrees": "122.5",
		"MeanTemperature_C": "-225",
		"SurfacePressure_bars": "0.00001",
		"NumberofMoons": "5",
		"RingSystem?": "No",
		"GlobalMagneticField?": "Unknown",
		"PlanetNumber": 9,
		"name": "PLUTO",
		"orbitColor": ORBITCOLOR['PLUTO']
	}
};

//from https://aa.usno.navy.mil/data/Earth_Seasons
const SEASONS = {
	"EARTH": {
		"2022": {
			"march": {
				"date": "2022-03-20T15:33:00.000Z",
				"season": "equinox"
			},
			"june": {
				"date": "2022-06-21T09:14:00.000Z",
				"season": "solstice"
			},
			"september": {
				"date": "2022-09-23T01:04:00.000Z",
				"season": "equinox"
			},
			"december": {
				"date": "2022-12-21T21:48:00.000Z",
				"season": "solstice"
			},
			"january": {
				"date": "2022-01-04T06:54:00.000Z",
				"season": "perihelion"
			},
			"july": {
				"date": "2022-07-04T07:11:00.000Z",
				"season": "aphelion"
			}
		},
		"2023": {
			"march": {
				"date": "2023-03-20T21:24:00.000Z",
				"season": "equinox"
			},
			"june": {
				"date": "2023-06-21T14:58:00.000Z",
				"season": "solstice"
			},
			"september": {
				"date": "2023-09-23T06:50:00.000Z",
				"season": "equinox"
			},
			"december": {
				"date": "2023-12-22T03:27:00.000Z",
				"season": "solstice"
			},
			"january": {
				"date": "2023-01-04T16:17:00.000Z",
				"season": "perihelion"
			},
			"july": {
				"date": "2023-07-06T20:06:00.000Z",
				"season": "aphelion"
			}
		},
		"2024": {
			"march": {
				"date": "2024-03-20T03:06:00.000Z",
				"season": "equinox"
			},
			"june": {
				"date": "2024-06-20T20:51:00.000Z",
				"season": "solstice"
			},
			"september": {
				"date": "2024-09-22T12:44:00.000Z",
				"season": "equinox"
			},
			"december": {
				"date": "2024-12-21T09:20:00.000Z",
				"season": "solstice"
			},
			"january": {
				"date": "2024-01-03T00:38:00.000Z",
				"season": "perihelion"
			},
			"july": {
				"date": "2024-07-05T05:06:00.000Z",
				"season": "aphelion"
			}
		},
		"2025": {
			"march": {
				"date": "2025-03-20T09:01:00.000Z",
				"season": "equinox"
			},
			"june": {
				"date": "2025-06-21T02:42:00.000Z",
				"season": "solstice"
			},
			"september": {
				"date": "2025-09-22T18:19:00.000Z",
				"season": "equinox"
			},
			"december": {
				"date": "2025-12-21T15:03:00.000Z",
				"season": "solstice"
			},
			"january": {
				"date": "2025-01-04T13:28:00.000Z",
				"season": "perihelion"
			},
			"july": {
				"date": "2025-07-03T19:55:00.000Z",
				"season": "aphelion"
			}
		},
		"2026": {
			"march": {
				"date": "2026-03-20T14:46:00.000Z",
				"season": "equinox"
			},
			"june": {
				"date": "2026-06-21T08:24:00.000Z",
				"season": "solstice"
			},
			"september": {
				"date": "2026-09-23T00:05:00.000Z",
				"season": "equinox"
			},
			"december": {
				"date": "2026-12-21T20:50:00.000Z",
				"season": "solstice"
			},
			"january": {
				"date": "2026-01-03T17:15:00.000Z",
				"season": "perihelion"
			},
			"july": {
				"date": "2026-07-06T17:30:00.000Z",
				"season": "aphelion"
			}
		},
		"2027": {
			"march": {
				"date": "2027-03-20T20:25:00.000Z",
				"season": "equinox"
			},
			"june": {
				"date": "2027-06-21T14:11:00.000Z",
				"season": "solstice"
			},
			"september": {
				"date": "2027-09-23T06:02:00.000Z",
				"season": "equinox"
			},
			"december": {
				"date": "2027-12-22T02:42:00.000Z",
				"season": "solstice"
			},
			"january": {
				"date": "2027-01-03T02:33:00.000Z",
				"season": "perihelion"
			},
			"july": {
				"date": "2027-07-05T05:06:00.000Z",
				"season": "aphelion"
			}
		}
	}
};



