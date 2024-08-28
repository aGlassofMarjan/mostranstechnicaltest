"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/Themecontext";

export default function CharacterByLocation() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [charactersByLocation, setCharactersByLocation] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    const storedLocations = JSON.parse(localStorage.getItem("locations")) || [];
    setLocations(storedLocations);
  }, []);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setCharactersByLocation(location.characters || []);
  };

  return (
    <div className="container mt-4">
      <h1>Characters By Location</h1>

      <div className="accordion" id="accordionExample">
        {locations.map((location, index) => (
          <div key={location.name} className={`accordion-item ${theme === "light" ? "bg-white" : "bg-dark"}`}>
            <h2 className="accordion-header" id={`heading-${index}`}>
              <button
                className={`accordion-button ${theme === "light" ? "" : "bg-dark text-light"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index}`}
                aria-expanded="false"
                aria-controls={`collapse-${index}`}
                onClick={() => handleLocationSelect(location)}
              >
                {location.name}
              </button>
            </h2>
            <div
              id={`collapse-${index}`}
              className={`accordion-collapse collapse ${theme === "light" ? "" : "bg-dark"}`}
              aria-labelledby={`heading-${index}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {selectedLocation && selectedLocation.name === location.name && (
                  <>
                    <h2 className={`mt-4 ${theme === "light" ? "" : "bg-dark text-light"}`}>Characters in {selectedLocation.name}</h2>
                    <ul className="list-group">
                      {charactersByLocation.map((character) => (
                        <li key={character.id} className={`list-group-item ${theme === "light" ? "" : "bg-dark text-light"}`}>
                          {character.name}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
